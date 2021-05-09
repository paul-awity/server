//imported packages
const express = require('express');

//create express server
const app = express();

//Routes
app.get('/test',(req,res)=>{
    res.send('Hello World')
})
//Setup Port Number
const port = process.env.PORT || 4000;

//Start Server
const server = app.listen(port, function(){
    console.log('Server Listening on Port: ' +port);
});