const { ObjectId } = require("mongodb");
const getTasksCollection = require("../models/taskModel");

// Retrieve all tasks
const getAllTasks = async (req, res) => {
  const tasksCollection = await getTasksCollection();
  const tasks = await tasksCollection.find().toArray();
  res.json(tasks);
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const tasksCollection = await getTasksCollection();
  const result = await tasksCollection.deleteOne({
    _id: new ObjectId(id),
  });
  res.json(result);
};

module.exports = {
  getAllTasks,
  deleteTask,
};
