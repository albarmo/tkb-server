const { Pool, Client } = require("pg");
const connectionString = "postgresql://postgres:postgres@localhost:5432/db_tkb";

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;
