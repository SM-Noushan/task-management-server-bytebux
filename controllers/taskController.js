const getTasksCollection = require("../models/taskModel");

// Retrieve all tasks
const getAllTasks = async (req, res) => {
  const tasksCollection = await getTasksCollection();
  const tasks = await tasksCollection.find().toArray();
  res.json(tasks);
};

module.exports = {
  getAllTasks,
};
