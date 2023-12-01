import React from 'react'
import { showTodo } from '../App'

function AddTodo({onClick}) {
  return (
    // AddTodo component
    <div className='text-center'>
        <input className='w-[30%] h-16 rounded pl-3 outline-none' placeholder='Set You ToDo' type="text" onChange={showTodo} />
        <button className='bg-blue-700 text-white absolute px-9 mt-2 right-[33rem] py-3 rounded ' onClick = {onClick}>Add</button>
    </div>
  )
}

export default AddTodo