import React, { useState } from 'react';
import Axios from 'axios';
import bg from '../example.png';
import uploadToCloudinary from '../utils/cloudinaryUpload';
import { useNavigate } from 'react-router-dom';
import AdminSidemenu from '../components/adminSidemenu';
import Round from '../styleComponents/round';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    category: '',
    name: '',
    price: '',
    description: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setImageUrl(objectUrl);
  };

  const handle = async (e) => {
    e.preventDefault();
    
    try {
      // Upload image to Cloudinary
      const imageLink = await uploadToCloudinary(selectedFile);
      console.log("cloudinary link", imageLink);
      const name = formData.name;
      const price = formData.price;
      const category = formData.category;
      const description = formData.description;
  
      setFormData({
        ...formData,
        image: imageLink
      });
      console.log(formData)
  
      // Wait for state update to complete
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await Axios.post('http://localhost:3001/products/add', formData);
      console.log('Response:', response);
      alert("succussfully added")

    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
    <div className='bg-white justify-start items-start  flex p-1    flex-col w-full h-screen focus:outline-none '>
     
  {/* <AdminSidemenu/> */}

        <nav className='w-full h-20 rounded-full flex justify-evenly'>
        <h1 className='font-thin backdrop-blur-lg w-full text-center py-2 fixed rounded-full px-11' style={
            { background: 'linear-gradient(to right, #ff8c00, #ff2d55)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',}
        }>Add products</h1>

        </nav>
        <div className='w-full flex flex-wrap  justify-center items-center mt-24'  style={{ zIndex: 999 }}>

      <form className=" flex flex-col items-center justify-center gap-4 w-1/2 rounded-lg " onSubmit={handle}>
      <input
            type="text"
            name="name"
            placeholder="Product Name"
            className='bg-transparent border-red-800 border-spacing-x-px-[2] w-1/2 h-11 rounded-lg p-2'
            onChange={handleInputChange} // Attach handleInputChange to onChange
          />

          <div className='flex justify-between flex-row items-center w-1/2'>
            <input
              type="tel"
              name="price"
              placeholder="Price"
              className='bg-transparent border-red-800 border border-spacing-x-px-[2px] w-[100px] h-11 rounded-lg p-2'
              onChange={handleInputChange} // Attach handleInputChange to onChange
            />
            <input
              type="text"
              name="category"
              placeholder="category"
              className='bg-transparent border-red-800 border w-[100px] h-11 rounded-lg p-2'
              onChange={handleInputChange} // Attach handleInputChange to onChange
            />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            className='bg-transparent border-red-800 border border-spacing-x-px-[2] w-1/2 h-28 rounded-lg p-2'
            onChange={handleInputChange} // Attach handleInputChange to onChange
          />


<div className="flex items-center justify-center w-1/2">
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-white border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              {/* ... Other label content ... */}
              <input id="dropzone-file" name="imageURL" type="file" className="hidden" onChange={handleFileInputChange} />
            </label>
          </div>
      <div className='w-1/2 flex justify-evenly'>

          <button
            type="submit"
            className="border bg-stone-300 text-black rounded-full py-2 px-4 hover:bg-stone-400"
          >

            Add Product
          </button>
          <button
            
            className="border text-black bg-stone-300 rounded-full py-2 px-4 hover:bg-stone-400"
          >

            reset
          </button>
          <AdminSidemenu/>
          <Round/>
      </div>
      </form>
      <div className='w-[200px] h-[200px] bg-blue-400 absolute right-28 bottom-10 blur-3xl' style={{ zIndex: 1 }}>
</div>
     
      </div>

    </div>
  );
};

export default AddProduct;