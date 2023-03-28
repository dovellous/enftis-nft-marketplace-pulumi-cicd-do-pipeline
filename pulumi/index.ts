import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";

// Our stack-specific configuration.
const config = new pulumi.Config();
const repo = config.require("repo");
const branch = config.require("branch");
const serviceInstanceCount = config.requireNumber("service_instance_count");
const serviceInstanceSize = config.require("service_instance_size");
const serviceDBCount = config.requireNumber("service_db_count");
const serviceDBEngine = config.require("service_db_engine");
const serviceDBVersion = config.require("service_db_version");
const servicesName = config.require("services_name");

// The DigitalOcean region to deploy into.
const region = digitalocean.Region.SFO3;

// Our MongoDB cluster (currently just one node).
const cluster = new digitalocean.DatabaseCluster("cluster", {
    engine: serviceDBEngine,
    version: serviceDBVersion,
    region,
    size: digitalocean.DatabaseSlug.DB_1VPCU1GB,
    nodeCount: serviceDBCount,
});

// The database we'll use for the app.
const db = new digitalocean.DatabaseDb("db", {
    name: servicesName,
    clusterId: cluster.id,
});

// The App Platform spec that defines our grocery list.
const app = new digitalocean.App("app", {
    spec: {
        name: servicesName,
        region: region,

        // The React front end.
        staticSites: [
            {
                name: "frontend",
                github: {
                    repo,
                    branch,
                    deployOnPush: true,
                },
                sourceDir: "/frontend",
                buildCommand: "npm install && npm run build",
                outputDir: "/build",
            }
        ],

        // The Express back end.
        services: [
            {
                name: "backend",
                github: {
                    repo,
                    branch,
                    deployOnPush: true,
                },
                sourceDir: "/backend",
                buildCommand: "npm install && npm run build",
                runCommand: "npm run start",
                httpPort: 8000,
                routes: [
                    {
                        path: "/api",
                        preservePathPrefix: true,
                    },
                ],
                instanceSizeSlug: serviceInstanceSize,
                instanceCount: serviceInstanceCount,

                // To connect to MongoDB, the service needs a DATABASE_URL, which
                // is conveniently exposed as an environment variable thanks to its
                // membership in this app spec (below).
                envs: [
                    {
                        key: "DATABASE_URL",
                        scope: "RUN_AND_BUILD_TIME",
                        value: "${db.DATABASE_URL}",
                    },
                ],
            },
        ],

        // Include the MongoDB cluster as an integrated App Platform component.
        databases: [
            {
                // The name `db` defines the prefix of the tokens used (above) to
                // read the environment variables exposed by the database cluster.
                name: "db",

                // MongoDB clusters are only available in "production" mode.
                // https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/
                production: true,

                // A reference to the `DatabaseCluster` we declared above.
                clusterName: cluster.name,

                // The engine value must be uppercase, so we transform it with JS.
                engine: cluster.engine.apply(engine => engine.toUpperCase()),
            }
        ]
    },
});


// Adding a database firewall setting grants access solely to our app.
const trustedSource = new digitalocean.DatabaseFirewall("trusted-source", {
    clusterId: cluster.id,
    rules: [
        {
            type: "app",
            value: app.id,
        },
    ],
});

// The DigitalOcean-assigned URL for our app.
export const { liveUrl } = app;