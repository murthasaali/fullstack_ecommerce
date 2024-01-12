import React, { useContext } from 'react'

import vjh from "./petfood3.png"
import vh from "./petfood.png"

// import { MDBBtn } from 'mdb-react-ui-kit';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom'
import Login from './login';
import { mycontext } from './home';
function Blank() {
  const navigate=useNavigate()
  const {login,shops,setShops}=useContext(mycontext)

  
  return (
    <div className='blank'  >
     
               
      <h1 className='qoute'>" Unleash a healthier, happier life with our premium pet nutrition. "</h1>
      

 


  
    </div>

  )
}

export default Blank