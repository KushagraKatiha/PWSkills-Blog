import AddTodo from "./Components/AddTodo"
import CardTodo from "./Components/CardTodo"

function App() {

  return (
    <>
      <div className="w-screen h-screen bg-cyan-950">
          <div>
            <AddTodo/>
          </div>
          <div>
            <CardTodo/>
          </div>
      </div>
    </>
  )
}

export default App
