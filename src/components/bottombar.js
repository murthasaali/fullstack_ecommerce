import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping, FaHeart, FaHouse, FaUser } from 'react-icons/fa6'
import { MdEdit, MdMessage } from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

function Bottombar() {
    const nav=useNavigate()
  return (
    <div className='w-full backdrop-blur-lg h-auto fixed p-2 flex md:hidden justify-evenly  bottom-0 z-50'>
    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 `} onClick={() => {nav("/")}}><FaHouse  className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 `} onClick={()=>{nav("/community")}}><MdMessage className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60`}  onClick={()=>{nav("/wishlist")}}><FaHeart  className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60   `} onClick={()=>{nav("/cart")}}><FaCartShopping  className='hover:scale-125 transition-all duration-300 '/></button>
            <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60  `}onClick={()=>{}}><FaUser  className='hover:scale-125 transition-all duration-300 '/></button>
        </div>
  )
}

export default Bottombar