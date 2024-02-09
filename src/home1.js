import React, { useContext } from 'react'
import Products from './products'
import { useNavigate } from 'react-router-dom'
import { mycontext } from './home'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Explore from './explore'
import Footer from './footer'

function Home1() {
  const{setShops}=useContext(mycontext)
  const navigate=useNavigate()
  const {login}=useContext(mycontext)
  const toshop=()=>{
    if(login)
    navigate('/catshop')
    else
  alert("please login")
  }
  const todog=()=>{
    if(login)
    navigate('/dogshop')
  else
  alert("please login")
  }
  const show=()=>{
    setShops((toggle)=>!toggle)
  }
  return (
    <>
       <div className='bg-stone-200  bg-no-repeat	bg-contain	 w-full h-screen  flex flex-column justify-center items-center'>
    <div className='bg-' >



       <div className='h-3/4 w-full overflow-hidden '>

    <MDBCarousel showControls >
      
          <MDBCarouselItem 
            className='w-100 d-block '
            itemId={1}
            src='https://cms-www.chewy.com/contentAsset/image/4d54c0fc-5fc5-4049-b5a8-d7580225b7c4/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/2880/resize_h/592/2023-01_CarePlus-Launch-HP-Hero-LARGE-INSURANCE-A.jpg'
            alt='...'
          />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://cms-www.chewy.com/contentAsset/image/383563c3-368b-45ad-81ce-131159b78482/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/1440/resize_h/296/Autoship-April-1-FULL-HPAS-Hero_LARGE.jpg'
          alt='...'
        />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://cms-www.chewy.com/contentAsset/image/00462baf-b0b7-4f74-9d48-be91064dd8be/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/1440/resize_h/296/2023-06-JustFoodForDogs-HP-Hero-LARGE-v2.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://cms-www.chewy.com/contentAsset/image/998fc298-3b73-4bb8-8302-71b149315bd7/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/1440/resize_h/296/2023-Halloween-HHCB2-LG-Multi.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://cms-www.chewy.com/contentAsset/image/c55fcfbc-a169-4ab7-87b7-773f3366b390/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/1440/resize_h/296/2023-08-PartnerMarketing-Multi-HHCB-LG-NoPromo.jpg'
        alt='...'
      />
    </MDBCarousel>
    
    <h1 onClick={show} className='qoute1'>lets shop by pets</h1>
       </div>
       <div className='pros'>
     
    <div className='pro4'></div>
    <div className='pro1' ></div>
    <div className='pro2' onClick={todog}></div>
    <div className='pro3' onClick={toshop}></div>
       </div>
      
  </div>

  </div>
  <Products/>
  <Explore/>
  <Footer/>

    </>
    
  )
}

export default Home1