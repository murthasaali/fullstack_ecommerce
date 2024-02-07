import React, { useState, useEffect } from 'react';
import Chevron from './chevron';
import axios from 'axios';
import { FaCartPlus, FaHeart } from 'react-icons/fa6';

function TopProducts() {
  // Define state to store the fetched products
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products/get');
      const productsWithImageData = await response.data;
      console.log('Products:', productsWithImageData);
      setProducts(productsWithImageData);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  return (
    <div className='p-2 w-full h-auto flex flex-col justify-start items-center bg-stone-200 z-30 rounded-t-3xl'>
      <Chevron />
      <h1 className='font-thin text-center sticky top-20 text-black px-10 rounded' style={{ backgroundColor: "#F5CFCF" }}>
        Top Products
      </h1>
      {/* Render the fetched products */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 mt-5">
        {products.map(product => (
          <div key={product.id} className="bg-white md:w-60 md:h-80 w-40 h-60 justify-between rounded shadow flex flex-col" 
           style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:"center" }}>
            {/* <img src={product.image} alt={product.name} className="h-32 object-cover mb-4" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p> */}
<div className='w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end'>
    <div className='w-auto p-3 font-thin text-white h-auto flex flex-col'>
        {product.name}
        <div>

        <button className='w-7 h-7 rounded-full flex justify-center items-center hover:backdrop-blur-sm bg-blue-500 text-white'><FaCartPlus/></button>
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
