import { useCallback, useState } from "react"
import AddTodo from "./Components/AddTodo"
import CardTodo from "./Components/CardTodo"

function App() {
  
  const [todoHeading, setTodoHeading] = useState('')
  const [todoStatus, setTodoStatus] = useState('pending')

  let todos = []

  // function to set ToDo into to todos array

  const showTodo = useCallback((e)=>{
    console.log(e.target.value);
    setTodoHeading(e.target.value)
    todos.push(<CardTodo todo_heading={todoHeading} todo_status={todoStatus}/>)
    console.log(todos);
  })

  return (
        // Making a todo app using tailwindcss
        <div className='bg-gray-700 h-screen pt-7'>
            <div className='text-center'>
                <AddTodo onClick={showTodo} />
            </div>
        </div>     
  )
}

export {App, showTodo}
