const checkTypeOfPlace = (req, res, next) => {
    if (req.body.typeof_place) {
      next();
    } else {
      res.status(400).json({ error: "Type of place is required" });
    }
  };

  const checkLocation = (req, res, next) => {
    if (req.body.location) {
      next();
    } else {
      res.status(400).json({ error: "Location is required" });
    }
  };

  module.exports = {checkTypeOfPlace, checkLocation };