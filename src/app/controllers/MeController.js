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
        res.redirect("/me/trash");
      })
      .catch(next);
  }

  // [GET] /me/courses/:id/delete => add field delete: true
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then((course) => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [GET] /courses deleted
  stashCourses(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then((course) => res.render("me/trash", { course }))
      .catch(next);
  }

  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then((course) => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new SiteController();
