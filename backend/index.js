const express = require('express');
const app = express();
const {createToDo,updateToDo} = require('./types'); // import the zod schemas we have created!!

app.use(express.json()); // to get access to req.body!! -> for the rest of the routes/requests

app.post('/todo',function(req,res){
    // add a new todo - to the list and in the database 
    // validate the request using the zod schema
    // if valid, add to the database
    const createPayload = req.body;
    const validatedPayload = createToDo.safeParse(createPayload);
    if(validatedPayload.success){
        // add to the database
    }else{
        res.status(411).json({"msg": "Invalid Payload or Message type sent"});// 411 -> wrong inputs sent!
        return; 
    }

})

app.get('/todos',function(req,res){
    // return all todos - to look at 

})

app.put('/completed',function(req,res){
    // mark specific todo as completed - change completed to true 
    // validate the request using the zod schema
    const updatePayload = req.body;
    const validatedPayload = updateToDo.safeParse(updatePayload);
    if(!validatedPayload.success){
        res.status(411).json({"msg":"Invalid Payload or Message type sent"});// 411 -> wrong inputs sent! 
        return;
    }
})

app.listen(3000,function(){
    console.log('server started');
})