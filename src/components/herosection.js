import React from 'react';
import hero from '../assets/hero.png'; // Assuming this is your image file

function Herosection() {
  return (
    <div className='w-full h-auto md:flex  justify-center items-center  mt-10'>
      <div className='md:w-1/2 w-full text-9xl  p-10 md:h-96 h-auto '>
        <h1 className=''>"Your new friend
with home delivery"</h1>
        <p className='text-xl font-thin'>Online pet store - a convenient solution when you're too lazy to leave the house.</p>
      </div>
      <div className='md:w-1/2 w-full md:h-96 h-52  rounded-3xl relative' style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat'}}>
        {/* Content for the right side */}
      </div>
    </div>
  );
}

export default Herosection;
