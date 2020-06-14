const express = require("express");
const dotenv = require("dotenv");

//Load environemnt variables using DOTENV module imported
dotenv.config({ path: "./config/config.env" });

//Load route files

const bootcamp = require("./routes/bootcamps");

const app = express();

//mount routes to server.js

app.use("/api/v1/bootcamps", bootcamp);

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
app.listen(
  PORT,
  console.log(`serve runnning in ${process.env.NODE_ENV} mode on port ${PORT} `)
);
