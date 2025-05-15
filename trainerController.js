const firebaseService = require("../services/firebaseService");
const { deleteTrainerById } = require("../services/firebaseService");

const getTrainers = async (req, res) => {
  try {
    const trainers = await firebaseService.getAllTrainers();
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch trainers" });
  }
};

// Logic for deleting a trainer
const deleteTrainer = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteTrainerById(id);
    if (!deleted) {
      return res.status(404).json({ message: "Trainer not found" });
    }
    res.status(200).json({ message: "Trainer deleted successfully" });
  } catch (error) {
    console.error("Error deleting trainer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logic for updating a trainer
const updateTrainer = async (req, res) => {
  const { id } = req.params;
  const trainerData = req.body;

  try {
    const updated = await firebaseService.updateTrainerById(id, trainerData);
    if (!updated) {
      return res.status(404).json({ message: "Trainer not found" });
    }
    res.status(200).json({ message: "Trainer updated successfully" });
  } catch (error) {
    console.error("Error updating trainer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getTrainers,
  deleteTrainer,
  updateTrainer,
};
