import React from 'react';
import { FaChevronUp } from 'react-icons/fa6';

function Chevron() {
  return (
    <button className=" transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
      <FaChevronUp />
    </button>
  );
}

export default Chevron;
