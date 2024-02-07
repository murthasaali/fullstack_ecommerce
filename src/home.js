import React, { useState } from 'react'
// import Navbar1 from './navbar'
import Login from './login'
import Cart from './cart'
import {Registration} from './registration'
import { Routes, Route, useLocation } from 'react-router-dom'
import Shop from './shop'
import Home1 from './home1'
import Dogshop from './dogshop'
import { createContext } from 'react'
import { ProductData } from './productdata'
import Showproduct from './Showproduct'
import Admin from './admin'

import Nav from './nav'
import Navbar1 from './navbar'
import AddProduct from './adimin/addProduct'
import AllProducts from './adimin/allProducts'
import EditProductAdmin from './adimin/editProduct'
import Dashboard from './adimin/Dashboard'
import Sales from './adimin/sales'
import Users from './adimin/users'
import LandingPge from './usersection/landingPge'

export const mycontext = createContext()
function Home() {
  const [carts, setCarts] = useState(0)
  const [shops, setShops] = useState(false)
  const [search, setSearch] = useState(false)
  const [iscart, setisCart] = useState(false)
  const [names, setNames] = useState("")
  const [addpro, setAddpro] = useState(ProductData)
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
     addpro, setAddpro, pop, shops,setShops,search,setSearch,login, setLogin, ProductData, pass, setpass, carts, prof, setProf, setCarts,names,setNames,iscart,setisCart,setPop
        }}>
       
          <Routes>
            <Route path='/' element={<LandingPge />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/add' element={<AddProduct />} />
            <Route path='/admin/all' element={<AllProducts />} />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/sales' element={<Sales />} />
            <Route path='/admin/userslist' element={<Users />} />

            <Route path='/admin/user' element={<Admin />} />
            <Route path='/admin/addproduct' element={<Admin />} />
            <Route path='/admin/editproduct/:id' element={<EditProductAdmin />} />
            <Route path='/admin/allproduct' element={<AllProducts />} />
            <Route path='/admin/sales' element={<Admin />} />
            <Route path='/admin/prosec' element={<Admin />} />
            <Route path='/admin/add' element={<AddProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/reg' element={<Registration />} />
            <Route path='/catshop' element={<Shop />} />
            <Route path='/dogshop' element={<Dogshop />} />
            <Route path='/showproduct/:id' element={<Showproduct />} />
            
          </Routes>
        </mycontext.Provider>
   

    </>
  )
}

export default Home
