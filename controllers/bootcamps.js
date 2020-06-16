const Bootcamp = require("../models/Bootcamp");
const errorRespose = require("../utils/errorResponse");

//@desc     get all bookcamps
//@route    GET /api/v1/bookcamps
//access    public
exports.getbootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }

  //res.status(200).json({ success: true, msg: "Show all bootcacmps" });
};

//@desc     get single bookcamp for id
//@route    GET /api/v1/bookcamps/:id
//access    public
exports.getbootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new errorRespose(`Bootcamp not found for id ${req.params.id}`, 404)
      );

      //return res.status(400).json({ success: false });
      //return is required as two res.status is in side block
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(new errorRespose(`Bootcamp not found for id ${req.params.id}`, 404));

    //res.status(400).json({success: false,});
  }
  //rew.status(200).json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

//@desc     create bookcamp
//@route    POST /api/v1/bookcamps
//access    private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }

  /*  console.log(req.body);
  res.status(200).json({ success: true, msg: "create new bootcacmps" }); */
};

//@desc     update bookcamp
//@route    PUT /api/v1/bookcamps/:id
//access    private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch {
    res.status(400).json({ success: false, data: [] });
  }
  //res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

//@desc     delete bookcamp
//@route    DELETE /api/v1/bookcamps/:id
//access    private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch {
    res.status(400).json({ success: false, data: [] });
  }

  //res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
