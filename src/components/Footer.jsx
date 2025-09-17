import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-36'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold tracking-tight leading-none '>refokus.</h1>            
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-13 text-zinc-400 font-medium capitalize '>Socials</h4>
                    {["instagram","gitub","linkedIn"].map((elem,idx) => <a key={idx} className='block font-regular text-zinc-600 capitalize mt-3'>{elem}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-13 text-zinc-400 font-medium capitalize '>Socials</h4>
                    {["Home","About","News","Contact Us"].map((elem,idx) => <a key={idx} className='block font-regular text-zinc-600 capitalize mt-3'>{elem}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end py-5'>
                    <p className='mb-12 text-right text-md'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className='w-34'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer