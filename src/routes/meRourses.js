const express = require("express");
const router = express.Router();

const MeController = require("../app/controllers/MeController");

router.put("/courses/:id", MeController.update);
router.get("/courses/:id/edit", MeController.edit);
router.get("/courses/:id/delete", MeController.delete);
router.get("/courses/:id/restore", MeController.restore);
router.get("/trash", MeController.stashCourses);
router.get("/courses", MeController.home);

module.exports = router;
