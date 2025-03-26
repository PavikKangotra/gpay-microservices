const express = require("express");
const {
  createUser,
  getAllUsers, 
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);  
router.get("/users/:userId", getUserById);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

module.exports = router;
