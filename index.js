require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-management-bytebux.vercel.app",
    ],
  })
);

app.use(bodyParser.json());
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send("TaskManagement Server Running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
