const express = require("express");
const app = express();
const appConfig = require("./config/appConfig.js");

app.use(express.json());
// const port = 3000;
app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("Hello World!");
});
app.listen(appConfig.port, () => {
  console.log("server is running on port", appConfig.port);
});
