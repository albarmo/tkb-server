const Products = require("../models/productsModel");
const uploader = require("../middleware/uploader");

class ProductController {
  static getListOfProducts(req, res) {
    Products.getAllProducts((error, data) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      } else {
        res.status(200).json(data);
      }
    });
  }

  static addProduct(req, res) {
    try {
      const upload = uploader("COURSE_IMAGE").fields([{ name: "image" }]);
      upload(req, res, (err) => {
        if (err) {
          console.log("gagal upload", err);
          return res.status(500).json({ msg: err });
        }
        const { image } = req.files;
        const imagePath = image ? "/" + image[0].filename : null;

        let { name } = req.body;
        let productValues = {
          name: req.body.name,
          image: imagePath,
        };

        Products.addProduct(productValues, (error, productRes) => {
          if (error) {
            res.status(500).json({ message: error.message });
          } else {
            res
              .status(201)
              .json({ message: `success create product ${productRes.name}` });
          }
        });
      });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
}

module.exports = ProductController;
