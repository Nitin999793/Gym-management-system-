const firebaseService = require("../services/firebaseService");
const { deleteMemberById } = require("../services/firebaseService");
const { getMemberByEmail } = require("../services/firebaseService");

const getMembers = async (req, res) => {
  try {
    const members = await firebaseService.getAllMembers();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
};

// Logic for deleting a trainer
const deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteMemberById(id);
    if (!deleted) {
      return res.status(404).json({ message: "member not found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    console.error("Error deleting member:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logic for updating a trainer
const updateMember = async (req, res) => {
  const { id } = req.params;
  const memberData = req.body;

  try {
    const updated = await firebaseService.updateMemberById(id, memberData);
    if (!updated) {
      return res.status(404).json({ message: "Memmber not found" });
    }
    res.status(200).json({ message: "Member updated successfully" });
  } catch (error) {
    console.error("Error updating member:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getMembers,
  deleteMember,
  updateMember,
};
