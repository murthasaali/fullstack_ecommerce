import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { mycontext } from './home';

function Cart() {
  const [productCounts, setProductCounts] = useState({});
  const { ProductData, pass, prof, names,setpass,setProf } = useContext(mycontext);

  const navigate = useNavigate();

  const handleIncrement = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 1) - 1, 0),
    }));
  };

  const totalSum = pass.reduce((sum, productId) => {
    const product = ProductData.find((item) => item.id === productId);
    if (product) {
      const productCount = productCounts[productId] || 1;
      return sum + product.prc * productCount;
    }
    return sum;
  }, 0);

  const checkout = () => {
    // Create a new order based on the selected products and their quantities
    const newOrder = pass.map((productId) => {
      const product = ProductData.find((item) => item.id === productId);
      if (!product) return null;
      const productCount = productCounts[productId] || 1;
      return {
        id: productId,
        name: product.name,
        unitPrice: product.prc,
        quantity: productCount,
      };
    });
  
    // Find the user by name and update their orders
    const updatedProf = prof.map((value) => {
      if (value.name === names) {
        return {
          ...value,
          orders:[ ...value.orders, ...newOrder], // Add the new order to the existing orders
        };
      }
      return value;
    });
  
    // Update the state with the new user data
    setProf(updatedProf);
    console.log(updatedProf);
  
    // Clear the shopping cart
    setpass([]);
  };
  

  return (
    <div className='bg-stone-200 h-screen w-screen flex justify-center items-center'>
    <div className='p-5 mt-20 w-full max-w-screen-xl mx-auto bg-stone-200'>
      <div className="flex flex-col justify-center items-center w-full">
        {pass.map((productId) => {
          const product = ProductData.find((item) => item.id === productId);
          if (!product) return null;

          const productCount = productCounts[productId] || 1;
          const productPrice = product.prc * productCount;

          return (
            <div
              key={product.id}
              className="w-full gap-4  flex flex-row justify-around items-center rounded h-40 bg-white"
            >
              <img src={product.image} className="w-32 h-32" alt={product.name} />
              <div className="font-sans font-bold text-cyan-400">{product.name}</div>
              <div className="text-red-500 text-2xl">₹{productPrice}</div>
              <div className="flex gap-2 bg-cyan-400 rounded justify-center items-center h-8 w-16">
                <button className="text-white" onClick={() => handleIncrement(product.id)}>
                  +
                </button>
                <div>{productCount}</div>
                <button className="text-white" onClick={() => handleDecrement(product.id)}>
                  -
                </button>
              </div>
              <div>{product.id}</div>
            </div>
          );
        })}

<div className="w-full p-2 h-44 bg-white rounded-lg mt-4">
            <h4>Summary</h4>
            <p className='text-3xl text-red-700'>Total: ₹{totalSum}</p>
            <button onClick={checkout}>Checkout</button>
          </div>
      </div>
    </div>
        </div>
  );
}

export default Cart;
