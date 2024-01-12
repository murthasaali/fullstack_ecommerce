import React from 'react'
import { FaCat } from 'react-icons/fa6'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
MDBCardBody,
MDBCardImage,
MDBCardTitle,

MDBBtn
} from "mdb-react-ui-kit";
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { mycontext } from './home';

function Shop() {
  const navigate=useNavigate()
  const {ProductData}=useContext(mycontext)
  const slicedata=ProductData.filter((value)=>value.type==="cat")

  return (
 
        <div className='shoppage'>
            
          <div className='top'>
            <div className='flex flex-col justify-around h-4/5  '>
              <div className='w-12 transition hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 border  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F68M3H4%2Fmedia%2FL5UMDRW7PZCV")] rounded border-lg    bg-contain ' >


              </div>
              <div className='w-12 transition hover:-translate-y-1 hover:scale-110 border  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F3SSJ0W%2Fmedia%2FL5UMAF8DEMAV")] rounded border-lg    bg-contain ' >


              </div>
              <div className='w-12 transition hover:-translate-y-1 hover:scale-110 border h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F4R3D64%2Fmedia%2FL5UMDFSVOL21")] rounded border-lg    bg-contain ' >


              </div>
              <div className='w-12 transition hover:-translate-y-1 hover:scale-110  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F8G8PZ4%2Fmedia%2FL5UMEBVOU86A")] rounded border-lg   bg-contain  border-black' >
              </div>
            </div>
            <h3><FaCat/></h3>
          </div>
          <div className='prosec'>

          <div className='backpic'>
            
          </div>
         
              
              <div className="bg-white h-100vw w-full flex flex-wrap mx-4  ">
              {  
            slicedata.map((product,index)=>(

  <div key={index} className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">{product.name}</h2>

    <div className="flex flex-wrap ">
      <div className="h-full w-52 border p-3 rounded">
        <div className="">
          <img src={product.image} onClick={()=>navigate(`/showproduct/${product.id}`)} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="transition hover:-translate-y-1 hover:scale-110 duration-300 object-cover object-center group-hover:opacity-75 "/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-red-900"> ₹{product.prc}</p>
      </div>
      

      
    </div>
  </div>
  ))
}
</div>
          
          </div>
          

        </div>
    
  )
}

export default Shop