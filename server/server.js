require("dotenv").config();
require("./DB");
const express = require("express");
const app = express();
const cors = require("cors");
const officeRouter = require("./Routes/office-routes");
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
const port = process.env.PORT;
const userRouter = require("./Routes/user-Routs");
const passport = require("passport");
require("./config/passport")(passport);


app.use(passport.initialize());
app.use('/office',passport.authenticate('jwt',{session:false}), officeRouter );
app.use("/auth",userRouter);

app.get("/", (req, res) => {
  res.send({ msg: "server online" });
});






app.listen(port);
