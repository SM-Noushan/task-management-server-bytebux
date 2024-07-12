const { ObjectId } = require("mongodb");
const getTasksCollection = require("../models/taskModel");

// Retrieve all tasks
const getAllTasks = async (req, res) => {
  const tasksCollection = await getTasksCollection();
  const tasks = await tasksCollection.find().toArray();
  res.json(tasks);
};

// Retrieve a specific task by ID
const getTaskById = async (req, res) => {
  console.log("get task by id");
  const { id } = req.params;
  const tasksCollection = await getTasksCollection();
  const task = await tasksCollection.findOne({
    _id: new ObjectId(id),
  });
  res.json(task);
};

// Create a new task
const createTask = async (req, res) => {
  const newTask = req.body;
  const tasksCollection = await getTasksCollection();
  const result = await tasksCollection.insertOne(newTask);
  res.json(result);
};

// Update an existing task by ID
const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  const tasksCollection = await getTasksCollection();
  const result = await tasksCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedTask }
  );
  res.json(result);
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
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
