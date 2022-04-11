const Course = require("../models/Course");

class SiteController {
  // [GET] /home
  home(req, res) {
    Course.find({}, function (err, course) {
      if (!err) {
        res.json(course);
        return;
      }
      res.status(400).json({ error: "Error !!!" });
    });

    // res.render("app");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
