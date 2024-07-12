const express = require("express");
const {
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", getAllTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
