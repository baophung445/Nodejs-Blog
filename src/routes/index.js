const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./meRourses");

function route(app) {
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = route;
