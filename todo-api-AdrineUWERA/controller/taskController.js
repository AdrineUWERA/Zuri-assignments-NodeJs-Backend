import Task from "../model/taskModel.js";

// Creates a new task and the task get saved in the database
const createTask = async (req, res) => {
  // checks the entry of the request
  if (!req.body) {
    return res.status(400).json({ message: "Fill all fields." });
  }

  try {
    const { title, is_completed, description, timestamp } = req.body;
    if (await Task.findOne({ title })){
      res.status(400).json({
        message: `The task with "${title}" title already exists`
      });
    } else {
      // add new task
      const task = await Task.create({
        title: title,
        is_completed: is_completed,
        description: description,
        timestamp: timestamp
      });
      // saves the new task in the database
      const taskCreated =  await task.save();
      res.status(201).json({
        message: "New task added successfully!",
        data: task,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error: ${err}`,
    });
  }
};

// Loads all tasks saved in the database
const getAllTasks = async (req, res) => {
  const task = await Task.find({});
  try{
    res.status(200).json({ tasks: task});
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong while loading all tasks",
      error: `Error: ${err}`,
    });
  };
};

// gets the specific task with provided id in the url
const getSpecificTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (task) {
      res.status(200).json({ task });
    } else{
      return res.status(404).json({ error: "There is no task at that id" });
    }

  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error: ${err}`,
    });
  }
};

// deletes a task from the todo list
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    //checks if the task exists
    if (task) {
      //deletes the task
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      return res.status(204).json({ }); 
    } else{
      res.status(204).json({ });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error: ${err}`
    });
  }
};

//updates the task's title or completion status
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (task) {
      //updates the task
      const taskUpdated = await Task.findByIdAndUpdate(taskId, req.body);
      const updatedTask = await Task.findById(taskId);
      res.status(204).json({ });
    } else{
      return res.status(404).json({ error: "There is no task at that id" });
    }

  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error: ${err}`,
    });
  }
};

export { createTask, getAllTasks, getSpecificTask, deleteTask, updateTask };
