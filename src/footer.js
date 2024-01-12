import React from 'react'
import { FaMailchimp, FaMessage, FaPhone } from 'react-icons/fa6'
import {AiOutlineMail } from 'react-icons/ai'


function Footer() {
  return (
    <div className='w-full bg-stone-200 '>
      <div className='footermain'>

      <div className='footersec1'>
        <h3 className='text-white text-xl '>Our experts are available 24/7:</h3>
        <h5 class="text-white text-xl">
    <FaPhone class="inline-block mr-2" /> 8086229572
  </h5>
        <h5 class="text-white text-xl">
    <FaMessage class="inline-block mr-2" /> chat now 
  </h5>
       
        <h5 class="text-white text-xl">
    <AiOutlineMail class="inline-block mr-2" /> Email
  </h5>
       
        
         
      </div>
      <div className='footersec2'>

      </div>
      <div className='footersec3'>

      </div>
      </div>
    </div>
  )
}

export default Footer