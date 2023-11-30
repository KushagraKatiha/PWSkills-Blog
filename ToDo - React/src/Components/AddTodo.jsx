import React from 'react'

function AddTodo() {
  return (
    // AddTodo component
    <div className='text-center'>
        <input className='w-[30%] h-16 rounded pl-3 outline-none' type="text" />
        <button className='bg-blue-700 text-white relative right-28 px-9 py-3 rounded '>Add</button>
    </div>
  )
}

export default AddTodo