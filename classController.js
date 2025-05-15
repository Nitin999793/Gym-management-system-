const firebaseService = require("../services/firebaseService");

const getAllClasses = async (req, res) => {
  try {
    const classes = await firebaseService.getClasses();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch classes" });
  }
};

module.exports = { getAllClasses };
