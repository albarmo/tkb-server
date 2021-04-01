const fs = require("fs");
const pool = require("../config/connection");

class Products {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  static getAllProducts(cb) {
    const qureyGetAllProducts = `
        SELECT * FROM "Products"
        `;
    pool.query(qureyGetAllProducts, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        const data = res.rows;
        const products = data.map(
          (el) => new Products(el.id, el.name, el.image)
        );
        cb(null, products);
      }
    });
  }

  static addProduct(values, callback) {
    const { id, name, image } = values;
    const queryAddProduct = `
        INSERT INTO "Products"
        ("name", "image")
        VALUES
        ($1, $2)
        RETURNING *
        `;
    const productValue = [name, image];
    pool.query(queryAddProduct, productValue, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        let newProduct = result.rows[0];
        newProduct = new Products(
          newProduct.id,
          newProduct.name,
          newProduct.image
        );
        callback(null, newProduct);
      }
    });
  }
}

module.exports = Products;
