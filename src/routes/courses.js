const express = require("express");
const router = express.Router();

const CoursesController = require("../app/controllers/CoursesController");

router.get("/create", CoursesController.create);
router.post("/store", CoursesController.store);
router.get("/:slug", CoursesController.home);

module.exports = router;
