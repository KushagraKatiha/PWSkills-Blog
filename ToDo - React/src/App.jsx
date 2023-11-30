import AddTodo from "./Components/AddTodo"
import CardTodo from "./Components/CardTodo"

function App() {

  return (
        // Making a todo app using tailwindcss
        <div className='bg-gray-700 h-screen pt-7'>
            <div className='text-center'>
                <AddTodo />
                <CardTodo />
            </div>
        </div>     
  )
}

export default App
