const { httpStatus } = require('../helpers');

export default (err, _req, res, _next) => {
  res.status(
    err.details[0].type || httpStatus.INTERNAL_SERVER,
  )
    .json({
      message: err.message,
    });
};
