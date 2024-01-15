import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaIcon } from 'react-fa-icon';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products/get');
      const productsWithImageData = response.data.map((product) => {
        if (product.image && product.image.data) {
          const imageDataUri = `data:image/jpeg;base64,${btoa(String.fromCharCode.apply(null, new Uint8Array(product.image.data)))}`;
          return { ...product, imageDataUri };
        } else {
          return { ...product, imageDataUri: null };
        }
      });

      setProducts(productsWithImageData);
      console.log(productsWithImageData);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  const select = (event) => {
    setSelectedCategory(event.target.value);
    // Add logic to filter products based on the selected category if needed
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/products/removeproduct/${productId}`);
      console.log(response.data);
      // Assuming the server sends a message upon successful deletion
      // You may want to update the products state or take other actions based on the response
      fetchData(); // Call the fetchData function to re-fetch data after deletion
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };
  

  return (
      <div className="w-full h-screen bg-black p-3 flex items-center flex-col">
        <h1 className='font-thin' style={
            { background: 'linear-gradient(to right, #ff8c00, #ff2d55)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',}
        }>All products</h1>

        
    <table className="min-w-full rounded-lg  p-4 mt-12">
        <thead className=' text-white  border rounded-lg '>
            <tr className='rounded-lg'>
               
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Product Image
                </th>
                <th className="mr-4 b  text-xs       tracking-wider">


                    <select


                        value={selectedCategory}
                        className="block w-full bg-cyan-800   border  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        // Set "all" as the default option
                        // Add an event handler to handle the selection change
                        onChange={select}
                    >
                        <option value="all">all</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>

                    </select>
                </th>



                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Price
                </th>
            </tr>
        </thead>
        <tbody className=" bg-stone-300  divide-y divide-gray-200">
            {
                products.map((product) => (
                    <tr key={product._id}>
                
                        <td className="px-6 py-4 whitespace-nowrap text-cyan-600">{product.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-16 w-16 rounded-full"
                            />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.catogery}</td>
                        <td className="px-6 py-4 wrap">{product.description.split('').slice(0,20).join('')}...</td>
                        <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap  text-cyan-800"   ><MdDeleteOutline onClick={()=>handleDelete(product._id)}/></td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-800" ><MdEdit/></td>
                        
                    </tr>

                ))}
        </tbody>
    </table>
</div>
  )
}

export default AllProducts