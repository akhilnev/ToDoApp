import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateToDo /> 
      <Todos todos = {[
        {
          title: "My first todo",
          description: "This is my first todo",
          completed: false
        },
        {
          title: "My second todo",
          description: "This is my second todo",
          completed: false
        },
        {
          title: "My third todo",
          description: "This is my third todo",
          completed: false
        },
      ]}/>
    </div>
  )
}

export default App
