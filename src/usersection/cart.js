import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa6';
import ProductCard from '../components/productCard';
import { addToWishlist } from '../utils/userServices';
import Table from '../components/table';

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
    <div className='w-full h-screen    p-3 flex justify-center items-center bg-pink-200'>
        <div className="overflow-auto p-4 h-3/4 w-1/2 rounded-3xl  ">
  <table className="w-full  gap-3">
    {/* head */}
    <thead className='text-xs font-thin'>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
       
         <tbody className=''>
         {data.map((item, index) => (
       
       <Table  name={item.productId.name} image={item.productId.image} index={index} price={item.productId.price} qty={item.productId.qty}/>
       ))}
  </tbody>
 </table>
</div>
    </div>
  );
}

export default UserCart;
