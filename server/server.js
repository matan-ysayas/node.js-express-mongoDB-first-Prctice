require('dotenv').config();
require('./DB');
const express=require('express');
const app=express();
const cors=require('cors');
const officeRouter=require('./Routes/office-routes')
 app.use('/office',officeRouter);
app.use(cors());
app.use(express.json());
const port=process.env.PORT;
const userRouter=require('./Routes/user-Routs')
 app.use('/user',userRouter)



app.get('/',(req,res)=>{
    res.send({msg:"server online"})
})







app.listen(port);