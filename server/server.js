require('dotenv').config();
require('./DB');
const express=require('express');
const app=express();
const cors=require('cors');
const officeRouter=require('./Routes/office-routes')
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 9000;
 app.use('/office',officeRouter);



app.get('/',(req,res)=>{
    res.send({msg:"server online"})
})







app.listen(port);