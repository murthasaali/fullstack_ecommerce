import React, { useState, useEffect } from 'react';
import Chevron from './chevron';
import axios from 'axios';
import { FaCartPlus, FaHeart } from 'react-icons/fa6';
import { config } from '../axios/userConfig';
import toast from 'react-hot-toast'
function TopProducts() {
  // Define state to store the fetched products
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');


  // Fetch products when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/get');
      const productsWithImageData = await response.data;
      console.log('Products:', productsWithImageData);
      setProducts(productsWithImageData);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');      
      
      const userId = localStorage.getItem('userId');
      console.log("token and useerid",token,userId) // Ensure 'Bearer' prefix is included
  
      if (!token) {
        console.error('Token is not available');
        return;
      }
  
      const response = await axios.post(`http://localhost:3001/cart/add-to-cart/${productId}?userId=${userId}`, null, {
  headers: {
    Authorization: `Bearer ${token}`, // Ensure 'Bearer' prefix is included
  },
});

      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      toast.error(error.message); // Fix the error here by passing error.message
    }
  };
  
  
  const addToWishlist = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      console.log(userId, token);
  
      if (!token) {
        console.error('Token is not available');
        return;
      }
  
      
  
      const response = await axios.post(`http://localhost:3001/wishlist/add-to-wishlist/${productId}?userId=${userId}`, config);
      console.log(response);
      toast.success(response.data.message)

    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  };
  
  
  return (
    <div className='p-2 w-full h-auto  bg flex flex-col justify-start items-center  z-30 rounded-t-3xl' style={{
      backgroundColor: "#F5CFCF "
  }} >
      <Chevron />
      <p className='font-thin text-center sticky top-20 text-black px-10 rounded' style={{ backgroundColor: "#F5CFCF" }}>
        Top Products
      </p>
      {/* Render the fetched products */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 mt-5">
        {products.map((product,index) => (
          <div key={index} className="bg-white md:w-60 md:h-80 w-40 h-60 justify-between rounded shadow flex flex-col" 
           style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:"center" }}>
            {/* <img src={product.image} alt={product.name} className="h-32 object-cover mb-4" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p> */}
      <p className='p-2 text-sm hover:backdrop-blur-xl text-transparent hover:text-black transition-all duration-300'>
        {product.description}
      </p>
<div className='w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end'>
    <div className='w-auto p-3 font-thin  text-white h-auto flex justify-between '>
        <div>
        {product.name}

        <button className='w-7 h-7 rounded-full flex justify-center items-center hover:backdrop-blur-sm bg-stone-2000 hover:w-14 hover:bg-blue-500  text-white transition-all duration-300' onClick={() => addToCart(product._id)}>
  <FaCartPlus />
</button>        </div>
        <div className='h-full flex items-end'>

        <button className='w-7 h-7 rounded-full bg-red-100 flex justify-center items-center hover:backdrop-blur-sm bg-stone-2000 text-stone-500 transition-all duration-200 hover:text-red-400 hover:text-2xl hover:bg-transparent' onClick={()=>addToWishlist(product._id)}><FaHeart  className=''/></button>
        </div>

    </div>


</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
