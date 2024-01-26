export function Todos({todos}){
    if (!todos) {
        // You can add a loading state or a message indicating that data is being fetched.
        return <p>Loading...</p>;
    }
    // return list of to-dos we have rendered onto the screen like:
    return (
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