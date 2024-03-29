import React, { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdChat, MdSaveAlt, MdShare } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';
import { getAllcomments, getAllPosts, likeaPost } from '../utils/communityServices';
import UserChatModal from './userChatModal';
import { BiLike } from 'react-icons/bi';
import { motion } from 'framer-motion'
import { container } from '../constants/framermotion';
import EmojiPicker from 'emoji-picker-react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
import { FaMouse } from "react-icons/fa";

import { BsEmojiSmileFill } from "react-icons/bs";
import axios from 'axios';


import { IoSend } from "react-icons/io5";
import Unfollowlist from './unfollowlist';

const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

function CommunityPosts() {
    const { register, handleSubmit, reset } = useForm();

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedComment, setSelectedComment] = useState(null);
    const [selectedPostId, setSelectedPostId] = useState(null); // State to track which post's chat modal is open
    const [page, setPage] = useState(1); // Track pagination page

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getAllPosts(page);
                console.log("data", res.latestPosts, page);

                setPosts(prevPosts => [...prevPosts, ...res.latestPosts]); // Append new posts to the existing array
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, [page]); // Fetch posts whenever the page changes

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;

        // Calculate the index of the last post displayed
        const lastIndexDisplayed = Math.min(posts.length - 1, Math.floor(scrollPosition / document.documentElement.clientHeight));

        // Check if the index of the last post displayed is 9 (zero-based index)
        if (lastIndexDisplayed === 9) {
            setPage(prevPage => prevPage + 1);
            console.log("page", page); // Increment page number to fetch next page of posts
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fetchComment = async (postId) => {
        try {
            const response = await getAllcomments(postId);
            console.log("comments", response);
            setComments(prevComments => ({
                ...prevComments,
                [postId]: response
            }));
        } catch (error) {
            console.error(error);
        }
    }

    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleChatModal = (postId) => {
        setSelectedPostId(postId === selectedPostId ? null : postId); // Toggle the state
        if (postId !== selectedPostId) {
            fetchComment(postId); // Fetch comments only if the modal is being opened
        }
    };

    const handleEmojiClick = (event, emojiObject) => {
        setSelectedEmoji(emojiObject);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };


    const onSubmit = async (data, postId) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('http://localhost:3001/posts/commentpost', {
                postId: postId,
                text: data.comment
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });


            console.log(response.data);
            toast.success("commented post")
            fetchComment(postId);
            // Return the response data if needed
        } catch (error) {
            throw error; // Throw error if request fails
        }
    };

    return (
        <div className='h-full w-full '>
            {posts.map((item, index) => (
                <>

                    <div className={`relative  ${index % 9 == 0 && "mb-24"}`} key={index}>
                        <div className='w-full backdrop-cyan-600 h-fit p-1 flex flex-col gap-2'>
                            <div className='w-full md:h-[450px] h-auto bg-opacity-50 md:gap-4 gap-1  backdrop-blur-sm relative rounded-3xl flex flex-col justify-center px-4 items-center md:items-start'>
                                <div className='w-auto mt-2 text-xl p-3 bg-opacity-50 absolute right-0 md:flex hidden flex-col justify-around rounded-lg h-96'>
                                    <button className='w-20 flex justify-center items-center flex-col hover:text-2xl  text-red-500 transition-all duration-300 py-3 hover:text-red-500' onClick={() => likeaPost(item._id)}>
                                        <CiHeart />
                                        <div className='text-xs text-stone-900'>liked by {item.likesCount ? item.likesCount : "0"} </div>
                                    </button>
                                    <button className='w-20 flex justify-center items-center hover:text-2xl transition-all duration-300 py-3 ' onClick={() => toggleChatModal(item._id)}>
                                        <MdChat onClick={() => toggleChatModal(item._id)} />                                </button>
                                    <button className='w-20 flex justify-center items-center hover:text-2xl transition-all duration-300 py-3 '>
                                        <MdShare />
                                    </button>
                                    <button className='w-20 flex justify-center items-center hover:text-2xl transition-all duration-300 py-3 ' onClick={() => handleDownload(item.image)}>
                                        <MdSaveAlt />
                                    </button>
                                </div>
                                <div className='w-full h-auto flex justify-between items-center mt-2'>
                                    <div className='flex justify-center items-end gap-[10px] bg-transparent'>
                                        <img src={item.postedBy.image} className='h-10 w-10 md:h-14 md:w-14 rounded-full' />
                                        <p className='text-xs text-orange-500' onClick={() => { setModalOpen(true); setSelectedUser(item); console.log("selected user", selectedUser) }}>{item.postedBy.username ? item.postedBy.username : item.postedBy.email}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <button><FaDotCircle /></button>
                                    </div>
                                </div>
                                <div className="h-80 md:h-[500px] relative rounded-lg md:w-[90%] w-80" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                    {(posts.length - 1 === index) &&
                                        <button onClick={() => setPage(page + 1)}
                                            className="absolute bottom-10 right-1/2 text-stone-50 text-3xl text-opacity-40 p-1 z-50 flex animate-bounce duration-300 ease-in-out infinite"
                                        >
                                            <FaMouse />



                                        </button>
                                    }
                                    <div className='w-full relative h-full bg-gray-950 text-xl bg-opacity-30 rounded-lg'>
                                        <motion.div
                                            variants={container}
                                            initial="hidden"
                                            animate="visible" className='h-[400px]   bg-opacity-30 w-full overflow-y-scroll p-3 flex flex-col items-center'>
                                            {
                                                (selectedPostId === item._id && comments[item._id]) &&
                                                <>
                                                    <form onSubmit={handleSubmit(data => onSubmit(data, item._id))} className='flex gap-1 justify-start sticky top-0  items-start'>
                                                        <motion.input {...register("comment")} placeholder='comment the post....' variants={items} name="comment" className='bottom-0  bg-transparent right-0 w-[100%] rounded-xl h-8  text-white text-xs font-thin px-4 ' />
                                                        <button onClick={toggleEmojiPicker} className='h-8  flex justify-center items-center w-8 rounded-full  transition-all duration-300'>
                                                            <BsEmojiSmileFill className=' text-yellow-400' />
                                                        </button>
                                                        <button type='submit' className='h-8  flex justify-center items-center  rounded-full  transition-all duration-300'>
                                                            <IoSend className='text-white text-sm text-opacity-95' />
                                                        </button>
                                                    </form>

                                                    {showEmojiPicker && (
                                                        <motion.div variants={items}>

                                                            <EmojiPicker searchDisabled onEmojiClick={handleEmojiClick} />
                                                        </motion.div >
                                                    )}
                                                </>

                                            }
                                            {(selectedPostId === item._id && comments[item._id]) && comments[item._id].map((comment, commentIndex) => (
                                                <div variants={items} key={commentIndex} className='flex justify-between  w-[80%] rounded-md mt-1 backdrop-blur-[3px]  px-2 py-1 text-xs text-black'>
                                                    <div className='flex gap-1 items-center h-auto justify-center'>
                                                        <img src={comment.author.image} className='h-8 w-8 rounded-full' alt='hello' />
                                                        <div className='bg-stone-50 bg-opacity-25 text-white font-thin w-fit p-1'> {comment.text}</div>
                                                    </div>
                                                    <BiLike className='text-blue-300 text-md' />
                                                </div>
                                            ))}


                                        </motion.div>

                                        <div className='absolute left-2 text-white bottom-2'>
                                            <div className='text-xl'>{item.hashtag}</div>
                                            <div className='font-thin text-xs'>{item.caption}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-auto p-3 flex md:hidden justify-around rounded-lg'>
                                    <button onClick={() => likeaPost(item._id)}> <CiHeart /></button>
                                    <button> <MdChat onClick={() => toggleChatModal(item._id)} /></button>
                                    <button> <MdShare /></button>
                                    <button onClick={() => handleDownload(item.image)}>
                                        <MdSaveAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {selectedUser && <div className='w-full  bg-white'><UserChatModal setOpen={setModalOpen} open={modalOpen} item={item.postedBy} /></div>}
                    </div>

                    {index === 3 && <Unfollowlist />}



                </>
            ))}
        </div>
    )
}

export default CommunityPosts;
