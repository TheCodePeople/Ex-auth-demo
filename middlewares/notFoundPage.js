module.exports = (req, res, next) => {
  res
    .status(404)
    .json({
      message:
        "Oops, it seems that the page that you're looking for doesn't exist",
    });
};
