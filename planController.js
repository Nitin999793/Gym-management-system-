const firebaseService = require("../services/firebaseService");

const getAllPlans = async (req, res) => {
  try {
    const plans = await firebaseService.getPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
};

module.exports = { getAllPlans };
