const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    console.log("hello");
    res.status(404);
})

app.listen(3000);