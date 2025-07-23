const express= require('express');
const db= require('./utils/db-connection');
const studentRoutes= require('./routes/studRoutes');
const app =express();

app.use(express.json());

const studModel=require("./models/student");

app.get('/', (req, res)=>{ 
    res.send('Hello world');

})

app.use("/students", studentRoutes);

db.sync({force:true}).then(()=>{
     app.listen(3000, (err)=>{ 
    console.log("server is running "); 
})
 }) .catch((err)=>{ console.log(err);

})