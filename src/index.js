const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");

const app = express();
const port = 4000;
app.use(express.static(path.join(__dirname, "public")));

// Http logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/app", (req, res) => {
  console.log("res", req.query.q);
  res.render("home");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => console.log(`Example port ${port}`));
