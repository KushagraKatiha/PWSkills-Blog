import React from 'react'

// Making todo app from react

function App() {
  const [todoHeading, setTodoHeading] = React.useState('')
  const [todoStatus, setTodoStatus] = React.useState('pending')
  
  // Define a array to store todo list
  const todoList = []

  // Define a function to add todo
  const addTodo = () => {
    
  }



  return (
    <div className='h-screen w-screen bg-slate-800'>

    </div>
  )
}

export default App


{/* <div className='text-center'>
                      <input className='w-[30%] h-16 rounded pl-3 outline-none' placeholder='Set You ToDo' type="text" onChange={(e)=>(e.target.value)}/>
                      <button className='bg-blue-700 text-white absolute px-9 mt-2 right-[33rem] py-3 rounded' onClick={()=>{
                        showTodoList()
                        showTodo()
                      }}>Add</button>
                  </div> */}


        //           <div className='text-left p-4 rounded text-white bg-black h-80 w-56 m-auto mt-32'>
        //   <h2 className='mb-10'>${todoHeading}</h2>
        //   <h2 className='mb-10'>Status: ${todoStatus}</h2>
        //   <button className='bg-purple-600 block rounded w-full py-2 mb-4 mt-20' onClick = ${()=>{
        //     handleStatus()
        //   }
        //   }}>Update Status</button>
        //   <button className='bg-purple-600 block rounded w-full py-2 mb-4 '>Remove</button>
        // </div>