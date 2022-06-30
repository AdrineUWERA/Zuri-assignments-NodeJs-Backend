import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  is_completed: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  },
});

const Task = new mongoose.model("task", taskSchema);
export default Task;
