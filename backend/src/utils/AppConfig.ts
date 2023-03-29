require('dotenv').config();

const enVars:any = process.env;

const appConfig:any = {
    serverPort: enVars.BACKEND_SERVICE_PORT || 8000
}

export default appConfig