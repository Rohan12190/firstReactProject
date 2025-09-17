import React from 'react'
import { FiCornerDownRight } from "react-icons/fi";

function Button({title="Get Started"}) {
  return (
    <div className='min-w-40 rounded-full bg-zinc-100 text-black flex justify-between items-center font-medium text-md px-4 py-2'>
        <span>{title}</span>
        <FiCornerDownRight />
    </div>
  )
}

export default Button