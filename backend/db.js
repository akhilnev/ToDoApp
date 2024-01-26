const mongoose = require('mongoose');

// connection to the Project 0 cluster made before 
// also make a .env file as we dont want to expose password ( GitGaurdian sent a message saying password exposed )
mongoose.connect("mongodb+srv://akhilnev:wzNhM4etH8W1ByI9@cluster0.d4pni82.mongodb.net/todos?retryWrites=true&w=majority")

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema) // need to export this to use in the backend/index.js file

module.exports = {
    todo
}



