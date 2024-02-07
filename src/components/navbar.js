import React from 'react';
import { RiBubbleChartFill } from "react-icons/ri";
import icon from '../assets/icon.png';

function Navbar() {
  return (
    <nav className='w-full h-20 backdrop-blur-sm p-4 flex justify-between items-center md:px-20 fixed z-40'>
      <div className='w-14 h-14 md:flex hidden' style={{ backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className='w-40 h-5 md:flex hidden justify-center items-center gap-5'>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>home</button>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>contact</button>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>shop</button>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>home</button>
      </div>
      <div className='flex gap-5'>
        <div className='w-auto h-auto flex items-center px-10 justify-evenly gap-2 rounded-full py-1 pl-4 bg-white'>
          <RiBubbleChartFill className="transform -translate-y-1/2 text-gray-400" />
          <input className='md:w-44 w-3/4 p-2 pl-8 backdrop-blur-sm md:h-10 h-5  focus:border-none bg-white outline-none' placeholder='search' />
        </div>
        <div className="avatar">
          <div className="md:w-14 w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
