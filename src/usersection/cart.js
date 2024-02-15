import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa6';
import ProductCard from '../components/productCard';
import { addToWishlist } from '../utils/userServices';
import Table from '../components/table';
import Total from '../components/total';
import Navbar from '../components/navbar';

function UserCart() {
  const [data, setData] = useState([]); // Define data state variable

  useEffect(() => {
    const getCartProduct = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          console.log("User ID or token is missing from localStorage.");
          return;
        }

        const response = await axios.get(`http://localhost:3001/cart/getcart?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("response", response.data);
        setData(response.data); // Update data state variable
      } catch (error) {
        console.log("error", error);
      }
    };

    getCartProduct(); // Call the function
  }, []);

  return (
    <div className='w-full h-screen md:p-3 flex flex-col items-center  ' style={{
      background: 'rgb(238,174,202)',
      background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
    }}>

      <Navbar />
      <div className='w-full h-full    md:p-3 p-1 flex  justify-evenly items-center  '>
        <div className="overflow-y-auto relative  p-4 md:h-3/2  h-1/2 md:w-2/5 w-full rounded-3xl flex flex-col   ">
          <p className='w-1/2 h-auto bg-stone-200 bg-opacity-30 py-3 flex justify-center items-center top-[-20px] rounded-lg absolute font-thin text-xl'>Your cart Details</p>
          <Table data={data} />
        </div>
        <div className="  p-4 md:h-3/2  h-3/4 md:w-2/5 w-full rounded-3xl md:flex hidden flex-col ">
          <Total data={data} />
          <div className='w-full flex justify-between'>

            <button className='bg-stone-100 bg-opacity-30 py-1 px-4 rounded-full'>continue shoping</button>
            <button className='bg-stone-100 bg-opacity-30 py-1 px-4 rounded-full'>Strype</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
