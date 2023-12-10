import React from 'react'

// Making todo app from react
function App() {
  const [todoStatus, setTodoStatus] = React.useState('pending')

  // Defining the Todo array which will contain todo Headings
  let Todos = []

  // Defining a function to push Todo heading from input component to Todo array 
  function addTodo(){
    let todoHeading = document.getElementById('todoInput').value
    if (todoHeading === '' || null) return 
    Todos.push(
      todoHeading
    )
    document.getElementById('todoInput').value = ''
    console.log(Todos);
  }

  
  function showTodos() {
    const todoContainer = document.getElementById('todoContainer');
  
    // Clear existing content
    todoContainer.innerHTML = '';
  
    // Check if there are todos
    if (Todos.length > 0) {
       todoContainer.style.display = 'flex';  
      // If there are todos, display them
      Todos.reverse().forEach((todo, key) => {
        todoContainer.innerHTML += `
          <div id=${key} class='flex flex-col gap-5 bg-slate-800 px-10 py-8 rounded-md border-black border-4 h-auto w-fit'>
            <h1 class="text-gray-200 text-2xl font-semibold">Todo: ${todo}</h1>
            <h2 class="text-gray-200 text-xl font-semibold">Status: ${todoStatus}</h2>
            <button class="bg-green-500 px-3 py-1 rounded-md text-gray-200 font-semibold">Done</button>
            <button class="bg-red-500 px-3 py-1 rounded-md text-gray-200 font-semibold">Delete</button>
          </div>`;
      });
    }
  }
  
  
  return (
    <>
      {/* Component to add TodoHeading into the todo arrays */}
      <div className='bg-slate-900 pt-10 h-screen px-10'>
        {/* Input box */}
        <div className='m-auto px-12 py-8 bg-blue-800 rounded-md w-fit'>
          <input id='todoInput' type="text" placeholder='Enter your todo' className='pr-36 bg-gray-950 border-none outline-none px-5 h-20 py-1 rounded-md text-xl text-gray-500 font-semibold' onChange={(e)=> e.target.value}/>
          <button onClick={()=>{addTodo(); showTodos()}} className='outline-none px-5 py-2 font-bold absolute right-[32rem] top-[5.7rem] text-gray-200 bg-blue-600 rounded-md'>Add ToDo</button>
        </div>

        {/* Todo Card Component */}
        <div id='todoContainer' className= {`hidden gap-8 px-10 py-8 rounded-md border-black border-4 bg-slate-600 h-auto w-fit mt-20`} >
          {/* Todo card will come from another funciton */}
        </div>  
      </div>
    </>
  )
  }

export default App

