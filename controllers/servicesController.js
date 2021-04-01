const Services = require("../models/serviceModel");
const uploader = require("../middleware/uploader");

class ServicesController {
  static getListService(req, res) {
    Services.getAllServices((error, data) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      } else {
        res.status(200).json(data);
      }
    });
  }

  static addService(req, res) {
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
        let serviceValues = {
          name: req.body.name,
          image: imagePath,
        };

        Services.addServices(serviceValues, (error, result) => {
          if (error) {
            res.status(500).json({ message: error.message });
          } else {
            res
              .status(201)
              .json({ message: `success create services ${result.name}` });
          }
        });
      });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
}

module.exports = ServicesController;
