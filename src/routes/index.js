const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newRouter);

  app.use("/app", siteRouter);
}

module.exports = route;
