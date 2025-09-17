import React, { useState } from 'react';
import Button from './Button';

function Product({ elem, count, mover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        mover(count);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className='w-full py-12 h-[23rem]'
    >
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-5xl font-medium capitalize'>{elem.title}</h1>
        <div className='dets w-1/3 flex flex-col items-start'>
          <p className='mb-8'>{elem.description}</p>
          
        
          <div
            className={`flex items-center gap-10 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {elem.isLive && <Button title='Live Website' />}
            {elem.isCase && <Button title='Case Study' />}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;