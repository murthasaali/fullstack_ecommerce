import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const [searchDiv,setSearchDiv]=useState(false)
    return (
        <>
        <div className="max-w-md mx-auto  w-full">
            <div className="relative">
                <input type="text" placeholder="Search" className="w-full bg-opacity-25  bg-stone-950 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />
                <button onClick={()=>setSearchDiv(!searchDiv)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-50 focus:outline-none">
                   <FaSearch/>
                </button>
            </div>
            <div className="mt-4">
                {/* Render search results here */}
            </div>
        </div>
{
    !searchDiv ?
    <div className="grid-container grid w-full grid-cols-3 md:gap-2 gap-1  p-2">
    <div className="item1 bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">1</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">2</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl row-span-2">3</div>
    <div className="bg-stone-50 rounded-lg h-62 bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">4</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">5</div>
    <div className="item1 bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">1</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">2</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl row-span-2">3</div>
    <div className="bg-stone-50 rounded-lg h-62 bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">4</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">5</div>
    <div className="item1 bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">1</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">2</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl row-span-2">3</div>
    <div className="bg-stone-50 rounded-lg h-62 bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">4</div>
    <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center py-20 text-3xl md:h-62 h-32">5</div>
</div>

:<div className='w-full h-[90%]'>
    <div className='w-full flex  justify-between text-white font-thin'>
        <button className='py-1 px-3 rounded-full justify-between bg-stone-950 bg-opacity-20'>products</button>
        <button className='py-1 px-3 rounded-full justify-between bg-stone-950 bg-opacity-20'>posts</button>
        <button className='py-1 px-3 rounded-full justify-between bg-stone-950 bg-opacity-20'>accounts</button>
        <button className='py-1 px-3 rounded-full justify-between bg-stone-950 bg-opacity-20'>vedios</button>
        
         </div>

</div>
}

        </>
    );
};

export default Search;
