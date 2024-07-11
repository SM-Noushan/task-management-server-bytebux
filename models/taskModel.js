const connectDB = require("../config/db");

const getTasksCollection = async () => {
  const db = await connectDB();
  return db.collection("tasks");
};

module.exports = getTasksCollection;
