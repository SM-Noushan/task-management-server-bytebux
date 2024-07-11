const { MongoClient } = require("mongodb");

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b6wqjn1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbName = "byteBux-taskManagement";

let db;

const connectDB = async () => {
  // Return the cached connection if it already exists
  if (db) return db;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  // Cache the database connection
  db = client.db(dbName);
  return db;
};

module.exports = connectDB;
