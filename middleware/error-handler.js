import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  const defaultError = {
    message: 'Something went wrong, please try again later!',
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  };
  res.status(defaultError.statusCode).json({
    message: err.message || defaultError.message,
  });
};

export default errorHandlerMiddleware;
