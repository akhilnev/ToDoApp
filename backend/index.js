const express = require('express');
const app = express();
const {createToDo,updateToDo} = require('./types'); // import the zod schemas we have created!!
const {todo} = require('./db'); // import the todo model we have created!! from the db.js file

app.use(express.json()); // to get access to req.body!! -> for the rest of the routes/requests

app.post('/todo',async function(req,res){
    // add a new todo - to the list and in the database 
    // validate the request using the zod schema
    // if valid, add to the database
    const createPayload = req.body;
    const validatedPayload = createToDo.safeParse(createPayload);
    if(validatedPayload.success){
        // add to the database
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        }) // await and async as we want to wait for the response to be added into the DB! 

        res.status(200).json({"msg": "Todo Created Successfully"}); // 200 -> OK (success) 

        return;

    }else{
        res.status(411).json({"msg": "Invalid Payload or Message type sent"});// 411 -> wrong inputs sent!
        return; 
    }

})

app.get('/todos',async function(req,res){
    // return all todos - to look at
    const todos = await todo.find({}); // As .find() is an async function, we need to use await else we get returned promises 
    res.status(200).json(todos); // return all todos , and success code 200
    return; 

})

app.put('/completed',async function(req,res){
    // mark specific todo as completed - change completed to true 
    // validate the request using the zod schema
    const updatePayload = req.body;
    const validatedPayload = updateToDo.safeParse(updatePayload);
    if(!(validatedPayload.success)){
        res.status(411).json({"msg":"Invalid Payload or Message type sent"});// 411 -> wrong inputs sent! 
        return;
    }
    // if valid, update the database
    await todo.update(
    {
        _id : updatePayload.id
    },
    {
        completed : true 

    }) // await and async as we want to wait for the response to be added into the DB!
    res.status(200).json({"msg":"Todo Updated Successfully"}); // 200 -> OK (success)
    return;
})

app.listen(3000,function(){
    console.log('server started');
})