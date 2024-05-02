const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello this is my First Docker Project");
});

app.listen(3000,()=>{
    console.log("Connected to port 3000");
});