const pool = require("../config/connection");

let queryProducts = `
DROP TABLE IF EXISTS "Products";
CREATE TABLE IF NOT EXISTS "Products" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "image" VARCHAR(225) NOT NULL
)
`;

let queryService = `
DROP TABLE IF EXISTS "Services";
CREATE TABLE IF NOT EXISTS "Services" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "image" VARCHAR(225) NOT NULL
)
`;

pool.query(queryProducts, (error, res) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`success creating products table`);
  }
});

pool.query(queryService, (error, res) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`success creating service table`);
  }
});
