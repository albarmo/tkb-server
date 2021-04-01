const fs = require("fs");
const pool = require("../config/connection");

class Services {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  static getAllServices(cb) {
    const qureyGetAllServices = `
        SELECT * FROM "Services"
        `;
    pool.query(qureyGetAllServices, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        const data = res.rows;
        const services = data.map(
          (el) => new Services(el.id, el.email, el.password)
        );
        cb(null, services);
      }
    });
  }

  static addServices(values, callback) {
    const { id, name, image } = values;
    const queryAddServices = `
        INSERT INTO "Services"
        ("name", "image")
        VALUES
        ($1, $2)
        RETURNING *
        `;
    const serviceValue = [name, image];
    pool.query(queryAddServices, serviceValue, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        let newData = result.rows[0];
        newData = new Services(newData.id, newData.name, newData.image);
        callback(null, newData);
      }
    });
  }
}

module.exports = Services;
