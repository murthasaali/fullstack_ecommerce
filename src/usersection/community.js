import React, { useState ,useEffect} from 'react';
import { FaHeart, FaHouse, FaUser } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { FiAlignCenter } from "react-icons/fi";
import { FaDotCircle, FaSearch } from 'react-icons/fa';
import { getAllPosts } from '../utils/communityServices';

function Community() {
    const [activeButton, setActiveButton] = useState('house');
    const [posts, setPosts] = useState([]);

    useEffect(()  => {
        const fetchPosts = async () => {
            try {
                const res = await getAllPosts();
                console.log("data", res);
                setPosts(res.latestPosts); // Assuming `latestPosts` is the key containing posts in your response
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [])
    

    const renderContent = () => {
        switch (activeButton) {
            case 'house':
                return <> <div className='w-full h-auto flex gap-2 border-black border-b-[1px] py-2'>
                    <div className='md:w-20 w-12 md:h-20 h-12 rounded-full bg-stone-50 bg-opacity-25 border-black '>

                    </div>
                    <div className='md:w-20 w-12 md:h-20 h-12 rounded-full bg-stone-50 bg-opacity-25 border-black '>

                    </div>
                    <div className='md:w-20 w-12 md:h-20 h-12 rounded-full bg-stone-50 bg-opacity-25 border-black '>

                    </div>
                    <div className='md:w-20 w-12 md:h-20 h-12 rounded-full bg-stone-50 bg-opacity-25 border-black '>

                    </div>
                    <div className='md:w-20 w-12 md:h-20 h-12 rounded-full bg-stone-50 bg-opacity-25 border-black '>

                    </div>
                    <div className='md:w-20 w-12 md:h-20 h-12 rounded-full bg-stone-50 bg-opacity-25 border-black '>

                    </div>
                </div>
                    <div className='w-full    h-auto p-1 flex flex-col '>

                        <div className='w-full  h-16  flex justify-between items-center'>
                            <div className=' flex items-end gap-[10px]'>
                                <div className='w-10 h-10  bg-white rounded-full'>

                                </div>
                                <span>hihello</span>
                            </div>
                            <div className='flex items-center gap-3'>

                                <spa>14 h</spa>
                                <button><FaDotCircle /></button>


                            </div>

                        </div>
                        <div className='w-full md:h-96 h-56 bg-stone-50 bg-opacity-50  border-s-[1px] rounded-3xl'> </div>


                    </div>
                    <div className='w-full    h-auto p-1 flex flex-col '>

                        <div className='w-full  h-16  flex justify-between items-center'>
                            <div className=' flex items-end gap-[10px]'>
                                <div className='w-10 h-10  bg-white rounded-full'>

                                </div>
                                <span>hihello</span>
                            </div>
                            <div className='flex items-center gap-3'>

                                <spa>14 h</spa>
                                <button><FaDotCircle /></button>


                            </div>

                        </div>
                        <div className='w-full md:h-96 h-56 bg-stone-50 bg-opacity-50  border-s-[1px] rounded-3xl'> </div>


                    </div>
                </>;
            case 'search':
                return <div>Search content here</div>;
            case 'edit':
                return <div>Edit content here</div>;
            case 'heart':
                return <div>Heart content here</div>;
            case 'user':
                return <div>User content here</div>;
            default:
                return null;
        }
    };

    return (
        <div className='w-full h-screen  flex flex-col justify-start items-center overflow-hidden ' style={{
            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
        }}>
            <div className='w-full h-20  mb-2  bg-opacity-60 flex justify-between px-3 items-center'>

                <div className='text-white text-xl font-thin'>pethouse</div>
                <div className='h-fit w-full md:w-[500px]   md:flex hidden  justify-evenly items-center'>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'house' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('house')}><FaHouse /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'search' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('search')}><FaSearch /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'edit' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('edit')}><MdEdit /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'heart' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('heart')}><FaHeart /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'user' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('user')}><FaUser /></button>
                </div>
                <button className='text-white  font-thin text-3xl'><FiAlignCenter /></button>

            </div>
            <div className='w-full h-full  flex justify-center p-2'>
                <div className=' h-[600px] bg-stone-100 bg-opacity-40 rounded-xl w-full md:w-[750px] overflow-y-scroll flex flex-col justify-start items-center p-3'>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Community;
