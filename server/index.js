const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.post("/register", (req, res) => {
  try {
    console.log(
      "I am post request, from the front end:::",
      req.body.registrationDetails
    );
    res.status(200).send("added!");
  } catch (error) {
    console.log("error:", error);
  }
});
app.listen(PORT, () => {
  console.log("running on PORT:", PORT, "...");
});
