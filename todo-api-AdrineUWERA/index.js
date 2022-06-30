import express from "express";
import dotenv from "dotenv";
import connectDB from "./data/db_connect.js";
import router from "./router/taskRouter.js";

dotenv.config();

// initialize the express server
const app = express();

//connect to the mongodb
connectDB;

app.use(express.json());

// access the routes
app.use(router);

const port = process.env.PORT;
// console.log(process.env.MONGO_URI)
// listens to the server and the port it is running on
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${3001}`);
});
