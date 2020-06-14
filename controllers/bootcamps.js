//@desc     get all bookcamps
//@route    GET /api/v1/bookcamps
//access    public
exports.getbootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcacmps" });
};

//@desc     get bookcamp for id
//@route    GET /api/v1/bookcamps/:id
//access    public
exports.getbootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

//@desc     create bookcamp
//@route    POST /api/v1/bookcamps
//access    private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcacmps" });
};

//@desc     update bookcamp
//@route    PUT /api/v1/bookcamps/:id
//access    private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

//@desc     delete bookcamp
//@route    DELETE /api/v1/bookcamps/:id
//access    private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
