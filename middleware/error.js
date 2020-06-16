//customer error handler for all errors from controller modules

const errrorHandler = (err, req, res, next) => {
  console.log(err.stack.red);

  res.status(err.statusCode || 500).json({
    success: false,
    data: err.message || 500,
  });
};

module.exports = errrorHandler;
