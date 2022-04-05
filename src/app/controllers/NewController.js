class NewController {
  // [GET] /news
  index(req, res) {
    console.log("thanh cong");
    res.render("news");
  }
  // [GET] /news/:slug
  show(req, res) {
    res.send("New detail !!! ");
  }
}
module.exports = new NewController();
