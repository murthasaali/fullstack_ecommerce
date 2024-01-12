import React, { useContext, useEffect } from 'react'
import { mycontext } from './home'
import { MDBIcon } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Productsec() {
    const { ProductData, setPop, pop, addpro, setAddpro } = useContext(mycontext);
    const nav = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('cat');
    const [filteredProducts, setFilteredProducts] = useState(addpro);
    const [url, seturl] = useState("");
    const [pop1, setpop1] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const deleteProduct = (productId) => {
        // Filter out the product with the matching ID
        const updatedProducts = addpro.filter((product) => product.id !== productId);
    
        // Update the state with the new products array
        setAddpro(updatedProducts);
    
        // If you want to update the filteredProducts state, you can do so as well
        // For example, if you want to keep the filteredProducts updated, you can use the same filter logic
        const updatedFilteredProducts = filteredProducts.filter((product) => product.id !== productId);
        setFilteredProducts(updatedFilteredProducts);
    };
    
    const handle = (e) => {
        e.preventDefault();

        const newproduct = {
            id: addpro.length + 1,
            image: e.target.imageURL.value,
            type: e.target.category.value,
            name: e.target.proname.value,
            dscr: e.target.dscre.value,
            qty: 1,
        };

        setAddpro([...addpro, newproduct]);
        console.log(newproduct);
        setPop((toggle) => !toggle);
    };

    const select = (e) => {
        setSelectedCategory(e.target.value);
    };
    const edit = (product) => {
        setEditingProduct(product);
        setpop1(true); // Show the editing form
    };
    

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(addpro);

        } else if (selectedCategory === 'cat') {
            setFilteredProducts(addpro.filter((value) => value.type === 'cat'));

        } else {
            setFilteredProducts(addpro.filter((value) => value.type === 'dog'));
        }
    }, [selectedCategory, addpro]);
    const handleEdit = (e) => {
        e.preventDefault();
    
        // Create a copy of the original product array
        const updatedProducts = [...addpro];
    
        // Find the index of the edited product in the array
        const productIndex = updatedProducts.findIndex(
            (product) => product.id === editingProduct.id
        );
    
        // Update the properties of the edited product
        updatedProducts[productIndex] = {
            ...editingProduct,
            image: e.target.imageURL.value,
            type: e.target.category.value,
            name: e.target.proname.value,
            dscr: e.target.dscre.value,
        };
    
        // Update the state with the new product array
        setAddpro(updatedProducts);
    
        // Close the editing form
        setpop1(false);
    };
    
    return (
        <div className='w-full h-full  flex flex-column overflow-auto  rounded'>
            <div className='p-4 h-full '>
                {
                    pop &&

                    <div className=' bg-cyan-300 fixed z-2 w-3/4 h-5/6 mr-62 focus:outline-none mt-8  rounded'>
                        <div className=" h-full w-full ">
                                <div className='flex w-full h-20 items-center justify-around'>

                                <h2 className="text-5xl text-black  font-sans font-semibold mb-4">Add Product   </h2>
                                <MDBIcon fas icon='arrow-circle-left'  className='text-3xl' onClick={() => setPop((toggle) => !toggle)}/>
                                </div>
                            <form className="b-slate-500 p-6 rounded-lg shadow-md" onSubmit={handle}>
                               
                                <div className='w-full  h-full flex  p-5'>
                                    <div className='w-1/2 flex gap-20 items-center h-5/6  flex-column p-3 h-full'>

                                        <div className=" bg-white rounded h-64 w-64 p-5 ">
                                            <img src={url} className='h-full w-full'/>
                                        </div>
                                        <input
                                            type="url"
                                            name="imageURL"
                                            className="border rounded-lg px-4 py-2 w-full"
                                            onChange={(e)=>seturl(e.target.value)}
                                        />
                                    </div>
                                    <div className='w-1/2 flex justify-center flex-column h-full p-3'>

                                        <div className="mb-4">
                                            <label className="block text-black text-sm font-bold mb-2">
                                                Category
                                            </label>
                                            <div>
                                                <label className="inline-flex items-center mr-4">
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value="dog"

                                                        className="form-radio h-5 w-5 text-indigo-200"
                                                    />
                                                    <span className="ml-2 text-black">Dog</span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value="cat"

                                                        className="form-radio h-5 w-5 text-indigo-200"
                                                    />
                                                    <span className="ml-2 text-black">Cat</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-sm font-bold mb-2" htmlFor="productName">
                                                Product Name
                                            </label>
                                            <input
                                                type="text"

                                                name="proname"
                                                className="border rounded-lg px-4 py-2 w-full"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-black text-sm font-bold mb-2" htmlFor="productDescription">
                                                Description
                                            </label>
                                            <textarea
                                                name="dscre"

                                                className="border rounded-lg px-4 py-2 w-full h-32"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 text-black rounded-lg py-2 px-4 hover:bg-indigo-700"
                                            >
                                                Add Product
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                }
                {
                    pop1 &&

                    <div className=' bg-purple-200 fixed z-2 w-3/4 h-5/6 mr-62 focus:outline-none mt-8  rounded'>
                        <div className=" h-full w-full ">
                            <form className="b-slate-500 p-6 rounded-lg shadow-md" onSubmit={handleEdit}>
                                <div className=' flex w-full justify-around items-center '>
                                <h2 className="text-5xl text-black  font-sans font-semibold mb-4">Edit Product </h2>
                                <MDBIcon fas icon='arrow-circle-left' className='text-3xl' onClick={() => setpop1((toggle) => !toggle)}/></div>

                                <div className='w-full  h-full flex  p-5'>
                                    <div className='w-1/2 flex gap-20 items-center h-5/6  flex-column p-3 h-full'>

                                        <div className=" bg-white rounded h-64 w-64 p-5 ">
                                            <img src={editingProduct.image} className='h-full w-full'/>
                                            
                                        </div>
                                        <input
                                            type="url"
                                            name="imageURL"
                                            className="border rounded-lg px-4 py-2 w-full"
                                            value={editingProduct.image}
                                            onChange={(e) =>
                                                setEditingProduct({ ...editingProduct, image: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className='w-1/2 flex justify-center flex-column h-full p-3'>

                                        <div className="mb-4">
                                            <label className="block text-black text-sm font-bold mb-2">
                                                Category
                                            </label>
                                            <div>
                                                <label className="inline-flex items-center mr-4">
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value="dog"
                                                        checked={editingProduct.type==='dog'}
                                                        onChange={(e)=>{setEditingProduct({...editingProduct,type:e.target.value})}}
                                                        className="form-radio h-5 w-5 text-indigo-200"
                                                    />
                                                    <span className="ml-2 text-black">Dog</span>
                                                </label>
                                                <label className="inline-flex  items-center">
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value="cat"
                                                        checked={editingProduct.type==='cat'}
                                                        onChange={(e)=>{setEditingProduct({...editingProduct,type:e.target.value})}}
                                                        className="form-radio h-5 w-5 text-indigo-200"
                                                    />
                                                    <span className="ml-2 text-black">Cat</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-white text-sm font-bold mb-2" htmlFor="productName">
                                                Product Name
                                            </label>
                                            <input
                                                type="text"
                                                name="proname"
                                                className="border rounded-lg px-4 py-2 w-full"
                                                value={editingProduct.name}
                                                onChange={(e)=>{setEditingProduct({...editingProduct, name : e.target.value})}}
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-white text-sm font-bold mb-2" htmlFor="productDescription">
                                                Description
                                            </label>
                                            <textarea
                                                name="dscre"
                                                value={editingProduct.dscr}
                                                className="border rounded-lg px-4 py-2 w-full h-32"
                                                onChange={(e)=>{setEditingProduct({...editingProduct,dscr:e.target.value})}}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 text-white rounded-lg py-2 px-4 hover:bg-indigo-700"

                                            >
                                               save 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                }

                <div className='flex h-16 justify-around items-center w-full top-0  sticky bg-gray-200 p-5 '>

                    <input className='h-12 w-96 rounded-full bg-blue-200 p-2 text-8' placeholder='search' />
                    <p  className='text-3xl'> <MDBIcon fas icon="plus" className='text-3xl'  onClick={() => setPop((toggle) => !toggle)} />Add  product</p>
                </div>
                <div className="container mx-auto ">
                    <table className="min-w-full bg-cyan-800  rounded-lg  p-4 mt-12">
                        <thead className=' text-white'>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    id
                                </th>
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
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                filteredProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-cyan-600">{product.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-16 w-16 rounded-full"
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.type}</td>
                                        <td className="px-6 py-4 wrap">{product.dscr.slice(0, 50)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">${product.prc}</td>
                                        <td className="px-6 py-4 whitespace-nowrap  text-cyan-800"   onClick={() => edit(product)}><MDBIcon fas icon="edit" /></td>
                                        <td className="px-6 py-4 whitespace-nowrap text-red-800" onClick={()=>deleteProduct(product.id)}><MDBIcon far icon="trash-alt" /></td>
                                        
                                    </tr>

                                ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}
export default Productsec