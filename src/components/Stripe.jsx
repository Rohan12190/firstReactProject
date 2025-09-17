import React from 'react'
function Stripe({elem}) {
  return (
    <div className='w-[16.66%] border-t-[2px] border-b-[2px] border-r-[2px] border-zinc-500 px-5 py-3 flex items-center justify-between '>
      <span><img className='w-28 h-10 ' src={elem.url} /></span>
      <span className='font-semibold'>{elem.number}</span>
    </div>
  )
}

export default Stripe