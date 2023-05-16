const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  organization: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    require: true,
  },
  studentId: {
    type: String,
    require: true,
  },
  batch: {
    type: Number,
    required: true,
  },
});

const AlumniDocument = mongoose.model("alumniData", alumniSchema);
const StudentDocument = mongoose.model("studentData", studentSchema);

module.exports = AlumniDocument;
module.exports = StudentDocument;
