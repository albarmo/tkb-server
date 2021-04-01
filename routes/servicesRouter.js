const serviceRouter = require("express").Router();
const ServicesController = require("../controllers/servicesController");

serviceRouter.get("/", ServicesController.getListService);
serviceRouter.post("/", ServicesController.addService);

module.exports = serviceRouter;
