const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controller/taskController");
const router = express.Router();

//another term for the routes
// router.route('/').get(getTasks).post(createTask)
// router.route('/:id').get(getTask).delete(deleteTask).put(updateTask)

// create a task
router.post("/", createTask);

//get read task
router.get("/", getTasks);

//get single task
router.get("/:id", getTask);

//delete task
router.delete("/:id", deleteTask);

//update a task
router.put("/:id", updateTask);

module.exports = router;
