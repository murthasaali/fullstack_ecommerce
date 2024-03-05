import React, { useState, useEffect } from 'react';

import { CiHeart } from "react-icons/ci";
import { CiUser ,CiSearch,CiHome  } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";


import { MdChat , MdSaveAlt, MdShare } from 'react-icons/md';
import { FiAlignCenter } from "react-icons/fi";
import { FaDotCircle  } from 'react-icons/fa';
import { getAllPosts, likeaPost } from '../utils/communityServices';
import Search from '../components/search';
import Notification from '../components/notification';
import Account from '../components/account';
import pro from '../assets/star.png'
import {format} from  'timeago.js'
import Chat from '../components/chat';
function Community() {
    const [activeButton, setActiveButton] = useState('house');
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState(true);

    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.jpg'; // specify the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getAllPosts();
                console.log("data", res.latestPosts);
                setPosts(res.latestPosts);
                // Assuming `latestPosts` is the key containing posts in your response
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [])
    

    console.log("posts", posts)


    const renderContent = () => {
        switch (activeButton) {
            case 'house':
                return <> 
                   

                    {
                        posts.map((item,index) => {
                            return (
                                <>
                                 {item.email==="murthasaalick123@gmail.com"&&console.log(true)}
                                <div className='w-auto  backdrop-blur-lg    h-auto p-1 flex flex-col mx-[10px]' key={item._id}>


                                    <div className='w-full md:h-[500px]  h-auto  bg-opacity-50 md:gap-4 gap-1  border-[1px] backdrop-blur-sm relative rounded-3xl flex flex-col justify-center px-4 items-start'>

                                    <div className='w-auto h-[80%] text-xl p-3 bg-opacity-50 absolute right-0 md:flex hidden flex-col justify-around rounded-lg'>
    <button className='w-20 flex justify-center items-center flex-col hover:text-2xl  text-red-500 transition-all duration-300 py-3 hover:text-red-500' onClick={() => likeaPost(item._id)} > 
        <CiHeart  />
        <div className='text-xs  text-stone-900 '>liked by {item.likesCount?item.likesCount:"0"} </div>
    </button>
    <button className='w-20 flex justify-center items-center hover:text-2xl transition-all duration-300 py-3 ' onClick={() => setComment(!comment)}> 
        <MdChat />
    </button>
    <button className='w-20 flex justify-center items-center hover:text-2xl transition-all duration-300 py-3 '> 
        <MdShare />
    </button>
    <button className='w-20 flex justify-center items-center hover:text-2xl transition-all duration-300 py-3 ' onClick={() => handleDownload(item.image)}>
        <MdSaveAlt />
    </button>
</div>


                                        <div className='w-full  h-auto  flex justify-between items-center '>
                                            <div className=' flex items-end gap-[10px]'>
                                                <div className='w-10 h-10  bg-white rounded-full overflow-hidden'>
                                                    <img src={item.postedBy ? item.postedBy.image : pro} className='h-full w-[150%] ' alt='postedby' />
                                                </div>
                                                <span className='text-xs'>{item.postedBy ? item.postedBy.email : "nothing"}</span>
                                           
                                           
                                            </div>
                                            <div className='flex items-center gap-3'>

                                                <span className='text-[10px]'>{item.createdAt?format(item.createdAt):"none"}</span>
                                                <button><FaDotCircle /></button>


                                            </div>

                                        </div>
                                        <img src={item.image} alt='posts' className='h-[60%]  opacity-80 md:h-[68%] rounded-lg md:w-[90%] w-full ' />
                                        <div className='w-full h-auto p-3 flex md:hidden    justify-around rounded-lg'>
                                            <button  onClick={()=>likeaPost(item._id)}> <CiHeart  /></button>
                                            <button> <MdChat onClick={()=>setComment(!comment)}/></button>
                                            <button> <MdShare /></button>
                                            <button onClick={() => handleDownload(item.image)}>
                                                <MdSaveAlt />
                                            </button>
                                        </div>
                                       <div> <div className='text-xs'>{item.caption}</div>
                                        <div className='text-xs'>{item.hashtag}</div></div>
                                        <div key={comment._id} className=''>
                                        {item.comments.map((comment) => (
                                            <div className='text-[11px]'>{comment.text}</div>
                                            ))}
                                </div>

                                    </div>
                                  


                                </div>
                           
                                            </>
                            );
                        })
                    }

                </>;
            case 'search':
                return <><Search /></>;
            case 'edit':
                return <><Chat /></>;
            case 'heart':
                return <><Notification /></>;
            case 'user':
                return <><Account /></>;
            default:
                return null;
        }
    };

    return (
        <div className='w-full h-screen  flex flex-col justify-start items-center overflow-hidden  ' style={{
            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
          }} >
            <div className='w-full backdrop-blur-lg h-auto p-2 flex md:hidden justify-evenly absolute bottom-0 z-50'>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'house' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('house')}><CiHome  className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'search' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('search')}><CiSearch className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'edit' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('edit')}><CiChat1  className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'heart' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('heart')}><CiHeart  className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'user' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('user')}><CiUser className='hover:scale-125 transition-all duration-300 ' /></button>
            </div>
            <div className='w-full h-20  mb-2 hidden md:flex bg-opacity-60  justify-between px-3 items-center'>


                <div className='text-white text-xl font-thin'>pethouse</div>
                <div className='h-fit w-full md:w-[500px]   md:flex hidden  justify-evenly items-center'>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'house' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('house')}><CiHome  className='hover:scale-125 transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'search' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('search')}><CiSearch className='hover:scale-125 transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'edit' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('edit')}><CiChat1  className='hover:scale-125 transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'heart' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('heart')}><CiHeart  className='hover:scale-125 transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'user' ? 'bg-stone-500' : ''}`} onClick={() => setActiveButton('user')}><CiUser className='hover:scale-125 transition-all duration-300 ' /></button>
                </div>
                <button className='text-white  font-thin text-3xl'><FiAlignCenter /></button>

            </div>

            <div className='w-full h-full  flex justify-center p-0'>
                <div className='md:h-[650px] h-[100%]  bg-opacity-40 rounded-xl w-full md:w-[750px] overflow-y-scroll flex flex-col justify-start items-center md:p-4 p-1' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Community;
