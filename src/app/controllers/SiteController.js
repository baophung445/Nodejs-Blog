const Course = require("../models/Course");

class SiteController {
  // [GET] /home
  home(req, res, next) {
    Course.find({})
      .lean()
      .then((course) => res.render("app", { course }))
      .catch(next);

    // res.render("app");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
