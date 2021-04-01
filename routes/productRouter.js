const productRouter = require("express").Router();
const ProductController = require("../controllers/productsController");

productRouter.get("/", ProductController.getListOfProducts);
productRouter.post("/", ProductController.addProduct);

module.exports = productRouter;
