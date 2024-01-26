import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'




function App() {
  const [todos, setTodos] = useState([]);
  // Now we have to hit the backend to get the todos, and use the setTodos to set the todos


  // BAD WAY OF HITTING THE BACKEND! 
  fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    console.log("Hi I am fetching data correctly!")
    console.log(json);
    setTodos(json.todos);// this will set the todos to the json todos, make sure to do json.todos as the json is an object and we need the todos array inside it
  })
  // Wrong as we render the page before the data is fetched
  // Use the useEffect hook to fetch the data and then render the page ( NEXT CLASS )
  


  return (
    <div>
      <CreateToDo ></CreateToDo> 
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
