const router = require("express").Router();
const productsRouter = require("./productRouter");
const serviceRouter = require("./servicesRouter");

router.get("/index", (req, res) => {
  res.status(200).json({ data: "router index works!" });
});

router.use("/products", productsRouter);
router.use("/services", serviceRouter);

module.exports = router;
