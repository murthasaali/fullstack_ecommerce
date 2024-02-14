import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sales from './sales'
import Userlist from './userlist'
import Dashboard from './dashboard'
import Productsec from './Productsec'
import { MDBIcon } from 'mdb-react-ui-kit'
import AddProduct from './adimin/addProduct'

function Admin() {
  const loctaion=useLocation()
  const isuser=loctaion.pathname.endsWith('/admin/user')
  const issales=loctaion.pathname.endsWith('/admin/sales')
  const isproduct=loctaion.pathname.endsWith('/admin/addproduct')
  const isdash=loctaion.pathname.endsWith('/admin')
  const isprosec=loctaion.pathname.endsWith('/admin/prosec')
  const nav=useNavigate()
  
  return (
    <div className=' bg-pink-200 w-full h-screen flex items-center p-4' >
        <div className='w-1/5 flex h-5/6 flex-column items-start p-5   justify-evenly '>
            <li className='list-none'> <button className="text-Zink-950 text-lg " onClick={()=>nav('/')}><MDBIcon fas icon='home'/>&nbsp;&nbsp;Home</button></li>
            <li className='list-none'> <button className="text-Zink-950 text-lg " onClick={()=>nav('/admin')}><MDBIcon fas icon='cube'/>&nbsp;&nbsp;Dash board</button></li>
            <li className='list-none'> <button className="text-Zink-950 text-lg  " onClick={()=>nav('/admin/user')}><MDBIcon fas icon='user'/>&nbsp;&nbsp;User list</button></li>
            <li className='list-none'> <button className="text-Zink-950 text-lg " ><MDBIcon fas icon='chart-line'/>&nbsp;&nbsp;sales</button></li>
            <li className='list-none'> <button className="text-Zink-950 text-lg " onClick={()=>nav('/admin/prosec')}><MDBIcon fab icon='opencart'/>&nbsp;&nbsp;Prodect sec</button></li>
            <li className='list-none'> <button className="text-Zink-950 text-lg "><MDBIcon fas icon='cube'/>&nbsp;&nbsp;Feedback</button></li>
            
        </div>
        <div className='bg-gray-200  flex-column justify-center w-11/12 h-full  rounded-lg '>
{
  isproduct && < AddProduct/>
 
}
{
  issales && < Sales/>
 
}
{
  isuser && < Userlist/>
 
}
{
  isdash && < Dashboard/>
 
}
{
  isprosec && < Productsec/>
 
}


        </div>
    </div>
  )
}

export default Admin