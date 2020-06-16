const express = require("express");
const dotenv = require("dotenv");
const morgain = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//Load environemnt variables using DOTENV module imported
dotenv.config({ path: "./config/config.env" });

//COnnect to DB
connectDB();

//Load route files

const bootcamp = require("./routes/bootcamps");
const logger = require("./middleware/logger");
const morgan = require("morgan");

const app = express();

//Boday parser to get data from req
app.use(express.json());

// Dev logging middleware using morgain
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routes to server.js

app.use("/api/v1/bootcamps", bootcamp);

//Attach the requests to customer error handler to catch all errors
app.use(errorHandler);

/// OLD school methos haivng routes in server.js itself
/* app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcacmps" });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "create new bootcacmps" });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `deletbootcamp ${req.params.id}` });
});
 */

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server runnning in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow
      .bold
  )
);

//Handle unhandlled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`error:${err.message}`.red);
  //close server and exit process
  server.close(() => process.exit(1));
});
