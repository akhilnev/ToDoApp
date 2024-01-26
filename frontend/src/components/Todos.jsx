export function Todos({todos}){
    // return list of to-dos we have rendered onto the screen like:
    return (
        console.log("Below are the todos: "),
        console.log(todos),
        <div>
            {todos.map(function(todo){ 
                // map basically iterates over the array and returns each todo valie 
                return (
                    // Always return inside a div as we need a single parent! 
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{todo.completed==true? "Compeleted" : "Mark as Completed"}</button>
                    </div>
                )
            })}
        </div>
    )
}