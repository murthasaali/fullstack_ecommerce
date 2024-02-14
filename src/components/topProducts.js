import React, { useState, useEffect } from 'react';
import Chevron from './chevron';
import axios from 'axios';
import { FaCartPlus, FaHeart } from 'react-icons/fa6';
import { config } from '../axios/userConfig';
import toast from 'react-hot-toast'
import ProductCard from './productCard';
import { addToCart, addToWishlist, fetchData } from '../utils/userServices';
function TopProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchData();
        const filtered=productsData.slice(0,4)
        setProducts(filtered);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
    
    fetchProducts();
  }, []);
  return (
    <div className='p-2 w-full h-auto  bg-pink-200    flex flex-col justify-start items-center  z-30 rounded-t-3xl' >

      <Chevron />
      <h1 className='font-bold text-center bg-black sticky top-0 border-black border text-white px-10 py-2 rounded-full' style={{ backgroundColor: "#F5CFCF" }}>
        Top products
      </h1>
      {/* Render the fetched products */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 mt-5">
      {
        products.map((item, index) => (
          <ProductCard
            key={index}
            title={item.name}
            image={item.image}
            category={item.category}
            price={item.price}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            productId={item._id}
            isCart={true}
            icon={<FaHeart/>}
          />
        ))
      }
      </div>
    </div>
  );
}

export default TopProducts;
