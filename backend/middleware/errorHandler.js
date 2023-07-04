const errorHandler = (error, req, res, next) => {
  console.log(error);
  let status = 500;
  let data = {
    message: "Internal server error",
  };

  if (error.code === 11000) {
    error.message = "Email already Register";
  }
  if (error.status) {
    status = error.status;
  }
  if (error.message) {
    data.message = error.message;
  }

  return res.status(status).json({ ststus: "failed", data });
};
module.exports = errorHandler;
