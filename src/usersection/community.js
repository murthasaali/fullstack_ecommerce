import React, { useState, useEffect } from 'react';

import { CiHeart } from "react-icons/ci";
import { CiUser, CiSearch, CiHome } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";


import { FiAlignCenter } from "react-icons/fi";
import { getAllPosts } from '../utils/communityServices';
import Search from '../components/search';
import Notification from '../components/notification';
import Account from '../components/account';
import Chat from '../components/chat';
import CommunityPosts from '../components/communityPosts';
function Community() {
    const [activeButton, setActiveButton] = useState('house');
    const [posts, setPosts] = useState([]);





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

                    <CommunityPosts/>

                

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
        <div className='w-full h-screen  flex flex-col justify-start items-center overflow-hidden bg-black '  >

            <div className='w-full backdrop-blur-lg h-auto p-2 flex md:hidden justify-evenly absolute bottom-0 z-50'>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'house' ? '' : ''}`} onClick={() => setActiveButton('house')}><CiHome className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'search' ? '' : ''}`} onClick={() => setActiveButton('search')}><CiSearch className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'edit' ? '' : ''}`} onClick={() => setActiveButton('edit')}><CiChat1 className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'heart' ? '' : ''}`} onClick={() => setActiveButton('heart')}><CiHeart className='hover:scale-125 transition-all duration-300 ' /></button>
                <button className={`h-fit p-3 rounded-xl bg-stone-50 bg-opacity-60 ${activeButton === 'user' ? '' : ''}`} onClick={() => setActiveButton('user')}><CiUser className='hover:scale-125 transition-all duration-300 ' /></button>
            </div>
            <div className='w-full h-20  mb-2 hidden md:flex backdrop-blur-lg bg-transparent justify-between px-3 items-center'>


                <div className='text-white text-xl  font-thin'>pethouse</div>
                <div className='h-fit w-full md:w-[500px]   md:flex hidden  justify-evenly items-center'>
                    <button className={`h-fit p-3 rounded-xl bg-opacity-60 ${activeButton === 'house' ? '' : ''}`} onClick={() => setActiveButton('house')}><CiHome className='hover:scale-125 text-3xl transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-opacity-60 ${activeButton === 'search' ? '' : ''}`} onClick={() => setActiveButton('search')}><CiSearch className='hover:scale-125 text-3xl transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-opacity-60 ${activeButton === 'edit' ? '' : ''}`} onClick={() => setActiveButton('edit')}><CiChat1 className='hover:scale-125 text-3xl transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-opacity-60 ${activeButton === 'heart' ? '' : ''}`} onClick={() => setActiveButton('heart')}><CiHeart className='hover:scale-125 text-3xl transition-all duration-300 ' /></button>
                    <button className={`h-fit p-3 rounded-xl bg-opacity-60 ${activeButton === 'user' ? '' : ''}`} onClick={() => setActiveButton('user')}><CiUser className='hover:scale-125 text-3xl transition-all duration-300 ' /></button>
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
