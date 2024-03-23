import React from 'react'
import { FaCartShopping, FaHeart, FaHouse, FaUser } from 'react-icons/fa6'
import {  MdMessage } from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

function Bottombar() {
    const nav=useNavigate()
  return (
    <div className='w-full bg-stone-800 text-white h-auto fixed p-2 flex md:hidden justify-evenly  bottom-0 z-50'>
    <button className={`h-fit p-3 rounded-xl  bg-black `} onClick={() => {nav("/")}}><FaHouse  className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl  bg-black `} onClick={()=>{nav("/community")}}><MdMessage className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl  bg-black`}  onClick={()=>{nav("/wishlist")}}><FaHeart  className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl  bg-black   `} onClick={()=>{nav("/cart")}}><FaCartShopping  className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl  bg-black  `}onClick={()=>{}}><FaUser  className='hover:scale-125 transition-all duration-300 '/></button>
        </div>
  )
}

export default Bottombar