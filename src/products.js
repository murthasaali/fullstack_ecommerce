import React from 'react'
import { mycontext } from './home';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate=useNavigate()
  const {ProductData,login}=useContext(mycontext)
  const slicedata=ProductData.slice(0,10)
 
  return (
    <>
    <section>

    <div className="bg-stone-200 h-100vw w-full flex flex-wrap   ">
   <h2 className='qoute1'>Top products</h2>
    <div className="bg-stone-200 h-100vw w-full flex flex-wrap   ">

      
   
    {  
  slicedata.map((product,index)=>(

<div key={index} className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
<h2 className="sr-only">{product.name}</h2>

<div className="flex flex-wrap ">
<div className="h-56 w-52 border p-3 rounded">
<div className="">
<img src={product.image} onClick={()=>{

  if(login)
  navigate(`/showproduct/${product.id}`)
else
alert("please login")

}
} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="transition hover:-translate-y-1 hover:scale-110 duration-300 object-cover object-center group-hover:opacity-75 "/>

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
</section>
    </>
  )
}

export default Products