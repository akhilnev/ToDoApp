const zod = require('zod');

const createToDo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateToDo = zod.object({
    id: zod.string(),
    completed: zod.boolean()
})

// exports the zod schemas we have created!! 

module.exports = {
    createToDo,
    updateToDo
}






