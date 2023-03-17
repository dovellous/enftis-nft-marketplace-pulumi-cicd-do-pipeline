module.exports = app => {

  const resourceItems = require("../controllers/ResourceItemController.ts");

  var router = require("express").Router();

  // Create a new ResourceItem
  router.post("/", resourceItems.create);

  // Retrieve all ResourceItems
  router.get("/", resourceItems.findAll);

  // Retrieve all published ResourceItems
  router.get("/published", resourceItems.findAllPublished);

  // Retrieve a single ResourceItem with id
  router.get("/:id", resourceItems.findOne);

  // Update a ResourceItem with id
  router.put("/:id", resourceItems.update);

  // Delete a ResourceItem with id
  router.delete("/:id", resourceItems.delete);

  // Create a new ResourceItem
  router.delete("/", resourceItems.deleteAll);

  app.use("/api/resourceItems", router);

};
