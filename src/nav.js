import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Menu,X} from 'lucide-react'
import { MDBIcon } from 'mdb-react-ui-kit'

const NavLinks=()=>{
    return(

        <>
        <NavLink to='/' className='text-white no-underline  font-bold font-sans text-xl'>home <MDBIcon fas icon="caret-down" /></NavLink>
      <NavLink to='/login' className='no-underline text-white font-bold  font-sans text-xl'>login <MDBIcon fas icon="caret-down" /></NavLink>
      <NavLink to='/cart' className='no-underline text-white font-bold font-sans text-xl'>cart</NavLink>
      <NavLink to='/products' className='no-underline text-white font-bold font-sans text-xl'>collection</NavLink>
        </>
    )
}
function Nav() {
    const [isopen,setisopen]=useState(false)
    const toggle=()=>{
        setisopen(!isopen)
    }
  return (
    <>
    <nav className='w-1/3 flex justify-end'>
        <div className='hidden md:flex w-full justify-between'>
            <NavLinks/>
        </div>
        <div className='md:hidden'>

        <button onClick={toggle} >
            {
                isopen?<X/>:<Menu/>
            }
        </button>
            </div>
            {
                isopen&&(
                    <div className='flex flex-col item-center basis-ful'>
                        <NavLinks/>
                    </div>
                )
            }


    </nav>
    </>
  )
}

export default Nav