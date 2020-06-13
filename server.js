const express = require("express");
const dotenv = require("dotenv");

//Load environemnt variables using DOTENV module imported
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`serve runnning in ${process.env.NODE_ENV} mode on port ${PORT} `)
);
