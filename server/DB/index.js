const mongoose = require("mongoose");
const stringConnection = process.env.CONNECTION_STRING;
mongoose.connect(stringConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('mongo DB is connected'))
.catch(err=>console.log(err))

module.exports = mongoose.connection;
