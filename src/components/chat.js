import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Chat() {
  const userId = localStorage.getItem("userId");
  console.log(userId);

  return (
    <div className='w-full bg-stone-50 bg-opacity-30 h-full p-3   justify-start items-start overflow-y-auto'>
      {/* <div className="relative">
                <input type="text" placeholder="Search" className="w-full bg-opacity-25   bg-transparent rounded-full px-4 py-2 focus:outline-none focus:border-stone-500 focus:ring focus:ring-blue-200" />
                <button  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-50 focus:outline-none">
                   <FaSearch/>
                </button>
            </div> */}
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      <div className='w-full mt-2 rounded-full h-16 bg-red-700'></div>
      {/* Add more red divs  mt-2 rounded-fullhere */}
    </div>
  );
}

export default Chat;
