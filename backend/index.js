const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
const Connection = async () => {
  const URL = "mongodb://localhost:27017/employee-management";
  try {
    await mongoose.connect(URL);
    console.log("Successfully connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

//schema
const dataSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
  },
  { timstamps: true }
);

const employeeModel = mongoose.model("employee", dataSchema);

//read data
app.get("/", async (req, res) => {
  const data = await employeeModel.find({});
  res.json({ success: true, data: data });
});

//create
app.post("/add", async (req, res) => {
  console.log(req.body);
  const data = new employeeModel(req.body);
  resData = await data.save();
  res.send({ success: true, message: "Successfully added", data: resData });
});

//delete
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await employeeModel.deleteOne({ _id: id });
  res.send({ success: true, message: "Successfully deleted", data: data });
});

Connection();
