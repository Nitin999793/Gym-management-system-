const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

// New DELETE route
router.delete("/members/:id", memberController.deleteMember);

// New PUT route for updating a trainer
router.put('/members/:id', memberController.updateMember);


router.get('/members', memberController.getMembers);
module.exports = router;

