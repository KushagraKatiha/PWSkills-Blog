import React from 'react'

function CardTodo() {
  return (
    // CardTodo component
    <div className='text-left p-4 rounded text-white bg-black h-80 w-56 m-auto mt-32'>
        <h2 className='mb-10'>1. Learn useRef</h2>
        <h2 className='mb-10'>Status: Pending</h2>
        <button className='bg-purple-600 block rounded w-full py-2 mb-4 mt-20'>Update Status</button>
        <button className='bg-purple-600 block rounded w-full py-2 mb-4 '>Remove</button>
    </div>
  )
}

export default CardTodo