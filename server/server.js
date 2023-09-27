const express = require("express");
const app = express();
require("../database/db");

const port = 3000;

app.listen(port, () => {
  console.log("server is up an running", port);
});
