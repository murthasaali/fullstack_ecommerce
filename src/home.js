import React, { useState } from 'react'
// import Navbar1 from './navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import { createContext } from 'react'
import {Toaster} from "react-hot-toast"
import AddProduct from './adimin/addProduct'
import AllProducts from './adimin/allProducts'
import EditProductAdmin from './adimin/editProduct'
import Dashboard from './adimin/Dashboard'
import Sales from './adimin/sales'
import Users from './adimin/users'
import LandingPge from './usersection/landingPge'
import Login from './usersection/login'
import { Registration } from './usersection/registration'
import UserCart from './usersection/cart'
import UserWishlist from './usersection/wishlist'
import EditProduct from './adimin/editAproduct'

export const mycontext = createContext()
function Home() {
  const [carts, setCarts] = useState(0)
  const [shops, setShops] = useState(false)
  const [search, setSearch] = useState(false)
  const [iscart, setisCart] = useState(false)
  const [names, setNames] = useState("")
  const [pass, setpass] = useState([])
  const [login, setLogin] = useState(false)
  const [pop, setPop] = useState(false)
 const location=useLocation()
 const isadmin=location.pathname.startsWith('/admin')
  
  const [prof, setProf] = useState([{id:1,name:"murthasa",email:"123@gmail.com",password:"1234",orders:[]}
  ,{id:2,name:"ashiq ali",email:"321@gmail.com",password:"1234",orders:[]}
  ,{id:3,name:"saleek",email:"323@gmail.com",password:"1234",orders:[]}



])
  return (
    <>
        <mycontext.Provider value={{
            pop, shops,setShops,search,setSearch,login, setLogin, pass, setpass, carts, prof, setProf, setCarts,names,setNames,iscart,setisCart,setPop
        }}>
       
          <Toaster
        position="top-center"
        reverseOrder={false}
      />
               
          <Routes>
            <Route path='/' element={<LandingPge />} />
            <Route path='/admin/add' element={<AddProduct />} />
            <Route path='/admin/all' element={<AllProducts />} />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/sales' element={<Sales />} />
            <Route path='/admin/userslist' element={<Users />} />
            <Route path='/admin/edit/:id' element={<EditProduct />} />
               <Route path='/login' element={<Login />} />
               <Route path='/reg' element={<Registration />} />
               <Route path='/cart' element={<UserCart/>} />
               <Route path='/wishlist' element={<UserWishlist/>} />



            
            {/* <Route path='/cart' element={<Cart />} /> */}
           
            
          </Routes>
        </mycontext.Provider>
   

    </>
  )
}

export default Home
