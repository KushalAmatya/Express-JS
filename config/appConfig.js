const dotenv = require("dotenv");
dotenv.config();
const appConfig = {
  port: process.env.PORT,
};
module.exports = appConfig;
