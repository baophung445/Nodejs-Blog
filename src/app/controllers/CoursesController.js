const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CoursesController {
  // [GET] /courses/:slug
  home(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/home", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
