const express = require("express");
const router = express.Router();
//exports controllermoethds
const {
  getbootcamps,
  getbootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getbootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getbootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

/// - old method with all the routing funcitons in side route file itself
/* 
router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcacmps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "create new bootcacmps" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `deletbootcamp ${req.params.id}` });
}); */

module.exports = router;
