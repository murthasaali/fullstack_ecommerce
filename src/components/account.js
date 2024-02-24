import React from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { FaArrowDown, FaDiceThree, FaPlus } from 'react-icons/fa6'

function Account() {
  return (
    <div className='w-full h-full flex flex-col gap-3'>
        <div className='w-full  flex justify-between items-center'>

            <div className='flex items-center  gap-1 text-xl'><span>Murthasa ali</span> <FaArrowDown className='text-xs'/></div>
            <div className='flex items-center  gap-3 text-xl'><FaPlusSquare className='text-black '/> <FaDiceThree className='text-black '/></div>

        </div>
    <div className='w-full flex justify-between items-center'>

        <div className='w-24 h-24 rounded-full bg-white relative'>
    <FaPlus className='absolute bottom-1 p-1 bg-black rounded-full text-white text-xl right-1' />

        </div>
        <div className='w-12 h-12 bg-white'></div>
        <div className='w-12 h-12 bg-white'></div>
        <div className='w-12 h-12 bg-white'></div>

    </div>
    <div className='w-full flex flex-col gap-1'>
        <div className='p-3 w-44 rounded-lg bg-stone-50 bg-opacity-80'></div>
        <div className='p-3 w-32 rounded-lg bg-stone-50 bg-opacity-80'></div>
        <div className='p-3 w-44 rounded-lg bg-stone-50 bg-opacity-80'></div>

    </div>

    <div className='w-full h-12 rounded-lg bg-white '></div>
    <div className="grid-container grid w-full grid-cols-3 md:gap-2 gap-1  p-2">
    <div className="item1 bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="item1 bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="item1 bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32"></div>
 
</div>
    </div>
  )
}

export default Account