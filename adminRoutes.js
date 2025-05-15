const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const planController = require("../controllers/planController");

router.get("/classes", classController.getAllClasses);
router.get("/plans", planController.getAllPlans);

module.exports = router;
