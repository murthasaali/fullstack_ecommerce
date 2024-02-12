// Navbar.js
import React, { useState, useEffect } from 'react';
import { RiBubbleChartFill } from "react-icons/ri";
import icon from '../assets/icon.png';
import axios from 'axios';
import {motion} from "framer-motion"
import { container,item } from '../constants/framermotion';
import { MdClose } from 'react-icons/md';
function Navbar() {
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [products, setProducts] = useState([]);
  const [string, setString] = useState("");



  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/get');
      const productsWithImageData = response.data;
      console.log('Products:', productsWithImageData);
      setProducts(productsWithImageData);
      
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value.trim().toLowerCase();
    setString(searchText)
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(string)
    );
   
    setSearchData(filteredProducts);
    console.log(searchData)
    
  };
  


  return (
    <nav className='w-full h-20 backdrop-blur-sm p-4 flex justify-between items-center md:px-20 fixed z-40'>
      <div className='w-14 h-14 md:flex hidden' style={{ backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className='w-40 h-5 md:flex hidden justify-center items-center gap-5'>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>home</button>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>contact</button>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>shop</button>
        <button className='py-2 hover:border-b-2 translate-x-1 hover:border-black'>home</button>
      </div>
      <div className='flex gap-5'>
        <div className='w-auto h-auto flex items-center px-10 justify-evenly gap-2 rounded-full py-1 pl-4 bg-white'>
          <RiBubbleChartFill className="transform -translate-y-1/2 text-gray-400" />
          <input onFocus={()=>setSearch(true)}value={string}  className='md:w-44 w-3/4 p-2 pl-8 backdrop-blur-sm md:h-10 h-5  focus:border-none bg-white outline-none' placeholder='search' onChange={handleSearch} />
        <button>
            <MdClose
  onClick={() =>{
    
    setSearchData([])
    setString("")
  }}
  className='text-xl hover:rotate-90 transition-all rounded-full  hover:bg-black hover:text-blue-300 duration-300 ease-in-out'
/>
  </button>
        </div>
        <div className="avatar">
          <div className="md:w-14 w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
          </div>
        </div>
        {
          searchData.length>0&&
          <motion.div
          variants={container}
          initial="hidden"
          animate="visible" className='z-[999] absolute w-80 h-auto   rounded-xl  md:right-20 right-3 top-20   '>
 {searchData.map((product) => (
        <motion.div
        variants={item}
      
      
        key={product.id} className="text-black bg-opacity-75 bg-yellow-400 p-1 mt-1 rounded-lg flex justify-start items-center">
          <motion.button >{product.name}</motion.button>
          {/* Add additional product information as needed */}
        </motion.div>
      ))}

          </motion.div>
        }
      </div>
    </nav>
  );
}

export default Navbar;

// SearchModal.js

