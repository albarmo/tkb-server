const { Pool, Client } = require("pg");
const connectionString =
  "postgresql://vnonnkjpdbdqlr:f2fc8bb124a0b04b9219d072a476675bedd30527e05f294b5fc0635ebf72a597@ec2-52-45-73-150.compute-1.amazonaws.com:5432/d7npe52ng392v7?ssl=true";

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;
