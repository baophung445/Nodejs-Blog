const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

//Connect to db
db.connect();

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

//Route init
route(app);

app.listen(port, () => console.log(`Example port ${port}`));
