import React from 'react'
import Products from './products'
import { FaDog } from 'react-icons/fa6'
function Dogshop() {
  return (
    <div className='shoppage'>
            
            <div className='top'>
            <div className='flex flex-col justify-around h-3/4 gap-0.5 '>
              <div className='w-12 transition ease-in-out delay-150  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F68M3H4%2Fmedia%2FL5UMDRW7PZCV")] rounded border-lg  hover:bg-red-400  bg-contain ' >


              </div>
              <div className='w-12 transition ease-in-out delay-150  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F3SSJ0W%2Fmedia%2FL5UMAF8DEMAV")] rounded border-lg  hover:bg-red-400  bg-contain ' >


              </div>
              <div className='w-12 transition ease-in-out delay-150  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F4R3D64%2Fmedia%2FL5UMDFSVOL21")] rounded border-lg  hover:bg-red-400  bg-contain ' >


              </div>
              <div className='w-12 transition ease-in-out delay-150  h-12 bg-[url("https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F8G8PZ4%2Fmedia%2FL5UMEBVOU86A")] rounded border-lg  hover:bg-red-400  bg-contain border-solid border-black' >
              </div>
            </div>
            <h3><FaDog/></h3>
          </div>
    <div className='prosec'>

    <div className='backpic1'>
      
    </div>
<Products/>
    </div>


  </div>
  )
}

export default Dogshop