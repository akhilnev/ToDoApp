const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.post('/todo',function(req,res){
    // add a new todo
    

})

app.get('/todos',function(req,res){
    // return all todos

})

app.put('/completed',function(req,res){
    // mark specific todo as completed
})

app.listen(3000,function(){
    console.log('server started');
})