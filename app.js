const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Okay" });
});

app.listen(port, () => {
  console.log(`server test-tkb running on port ${port}`);
});