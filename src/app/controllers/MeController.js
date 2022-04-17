const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /home
  home(req, res, next) {
    Course.find({})
      .lean()
      .then((course) => res.render("me/courses", { course }))
      .catch(next);
  }

  // [GET] /me/editCourses

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("me/editCourses", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then((course) => {
        res.redirect("/me/courses");
      })
      .catch(next);
  }
}

module.exports = new SiteController();
