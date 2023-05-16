const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const AlumniDocument = require("./database/model");
const StudentDocument = require("./database/model");

const PORT = 5000;

mongoose.connect(
  "mongodb+srv://jenish064:jenish064@cluster0.jq5g1g9.mongodb.net/test",
  {
    useNewUrlParser: true,
  }
);

// app.get("/", aync (req, res) => {

// })

app.post("/register/Alumni", async (req, res) => {
  const requestData = req.body.registrationDetails;
  console.log("reqData:::", requestData);
  const currentUser = new AlumniDocument({
    name: requestData.name,
    email: requestData.email,
    batch: requestData.batch,
    organization: requestData.organization,
    designation: requestData.designation,
    city: requestData.city,
  });
  try {
    await currentUser.save();
  } catch (error) {
    console.log("error:", error);
  }
});
app.post("/register/Student", async (req, res) => {
  const requestData = req.body.registrationDetails;
  console.log("reqData:::", requestData);
  const currentUser = new StudentDocument({
    name: requestData.name,
    email: requestData.email,
    batch: requestData.batch,
    dob: requestData.dob,
    studentId: requestData.studentId,
  });
  try {
    await currentUser.save();
  } catch (error) {
    console.log("error:", error);
  }
});

app.listen(PORT, () => {
  console.log("running on PORT:", PORT, "...");
});
