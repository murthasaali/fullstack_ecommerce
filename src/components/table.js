import React from 'react';
import { FaDeleteLeft, FaMinus, FaPlus } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

function Table({ name, price, qty, index, image }) {
  console.log(image);
  return (
      <tr className='border border-black '>
      <td>{index+1}</td>
      <td><img src={image} className='h-16 w-16 rounded-2xl'/></td>
      <td>{name}</td>
      <td>{price}</td>
      <td>1</td>
      <td>
        <button><FaPlus /></button>
        <button><FaMinus /></button>
      </td>
    </tr>
       
  );
}

export default Table;
