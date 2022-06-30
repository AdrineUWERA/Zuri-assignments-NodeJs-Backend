import express from "express";
import {createTask, getAllTasks, getSpecificTask, deleteTask, updateTask} from "../controller/taskcontroller.js";

const router = express.Router();

router.post("/v1/tasks", createTask);

router.get("/v1/tasks", getAllTasks);

router.get("/v1/tasks/:id", getSpecificTask);

router.delete("/v1/tasks/:id", deleteTask);

router.patch("/v1/tasks/:id", updateTask);

export default router;
