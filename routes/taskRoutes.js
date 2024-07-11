const express = require("express");
const { getAllTasks, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", getAllTasks);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
