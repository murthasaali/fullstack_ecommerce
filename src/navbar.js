


import {  useNavigate } from 'react-router-dom';
import {
   MDBIcon
} from 'mdb-react-ui-kit';
import './navbar.css';
import { mycontext } from './home';
import { useContext, useState } from 'react';
import Nav from './nav';


function Navbar1() {
const [searchdata,setSearchdata]=useState([])
  const navigate = useNavigate();
  const {names,carts,setSearch,search,ProductData,setisadmin}=useContext(mycontext)
 
  const toLogin = () => {
    navigate('/login');
  };

  const toCart = () => {
    navigate('/cart');
  };

  const toHome = () => {
    navigate('/');
  

    
  };
  const hendle=(e)=>{
    const text=e.target.value
    const text1=text.trim()
    if(text1==="cat")
     setSearchdata( ProductData.filter((value)=>value.type==="cat") )
    else if(text1==="dog")
     setSearchdata( ProductData.filter((value)=>value.type==="dog"))
    else 
     setSearchdata( ProductData.filter((value)=>value.name.includes(text1)))
    
  } 
  const idpass=(e)=>{
    const id=e.target.id
    navigate(`/showproduct/${id}`)
    setSearch((toggle)=>!toggle)
  }
  const toadmin=()=>{
    
    navigate('/admin')
    
  }

  return (
    <>
        <div className='   sm:p-6 lg:p-8 bg-blue-800 fixed top-0 z-[20] mx-auto flex items-center justify-between w-full p-4    '>
      <div className='flex'>

    
     <h2 className='qoute '>PetHouse</h2>
      </div>
 
<p onClick={toadmin} className='text-cyan-100'>hi {names}  🖐</p>
<p onClick={toadmin} className='text-cyan-100'> 24/7 help</p>
<div className=' flex justify-center  h-full items-center gap-1'>


<MDBIcon className='text-cyan-100' fas icon="search" onClick={()=>setSearch((toggle)=>!toggle) } />
      </div>
      
<Nav/>
    </div>
    
    {
      search &&
      <div className='h-3/4 w-1/2  fixed z-10 focus:outline-none top-28 rounded-lg'>
      <input type='text'  onChange={hendle} placeholder="search" className=' shadow shadow-4xl  h-12 bg-blue-200 rounded-full pl-5  border-solid border-black'/>
   <div className='bg-white rounded-lg opacity-75 p-2 gap-4 '>

  {
    searchdata.map((value,index)=>{
      return(

      <p key={index} className=' font-mono rounded-lg '  id={value.id}>
        {value.id}:
{value.name}
      </p>
    )})
  }
  </div>
    
   
    
    
    </div>
}
    </>
  );
}

export default Navbar1;
