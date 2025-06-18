exports.errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  const errors = err.errors || null;

  res.status(statusCode).json({
    success: false,
    error: message,
    errors,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};