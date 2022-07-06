const express = require("express");
const { json } = require("express");
const routes = require("./routes/flightRoute");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();

// initialize the express server
const app = express();

// connects to the database
mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("Connected to the database successfully")
  }
);


app.use(json());

app.use("/flights", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
