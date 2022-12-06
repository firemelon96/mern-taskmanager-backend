const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

//middleware - just a function
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-taskmanager.onrender.com"],
  })
);

app.use("/api/tasks/", taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Running in port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
