const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = new schema(
  {
    firstName: String,
    lastName: { type: String, required: true },
    email: { type: String, required: true,unique: true},
    password: { type: String, required: true},
    lastLogIn: { type: Date, default: Date.now },
    isLogIn: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports=mongoose.model('user',User)


