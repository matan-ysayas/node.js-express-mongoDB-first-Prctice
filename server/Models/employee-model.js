const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Employee = new schema(
  {
    firstName: String,
    lastName: { String, required },
    email: String,
    age: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Employee", Employee);
