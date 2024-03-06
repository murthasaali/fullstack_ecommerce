import React, { useState, useEffect } from 'react';

import { CiHeart } from "react-icons/ci";
import { MdChat, MdSaveAlt, MdShare } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';
import { getAllPosts, likeaPost } from '../utils/communityServices';
import { format } from 'timeago.js'
import UserProfileModal from '../components/userProfileModal';
function CommunityPosts() {
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.jpg'; // specify the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'https://example.com/avatar.jpg',
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

  return (
    <div className='h-full w-full'>

{
                        posts.map((item, index) => {
                            return (
                                <>
                                
                                    {item.email === "murthasaalick123@gmail.com" && console.log(true)}
                                    <div className='w-full  backdrop-blur-lg    h-fit p-1 flex flex-col gap-2 ' key={item._id}>


                                        <div className='w-full md:h-[450px]   h-auto  bg-opacity-50 md:gap-4 gap-1  border-[1px] backdrop-blur-sm relative rounded-3xl flex flex-col  justify-center px-4 items-center md:items-start'>

                                            <div className='w-auto  mt-2 text-xl p-3 bg-opacity-50 absolute right-0 md:flex hidden flex-col justify-around rounded-lg h-96'>
                                                <button className='w-20 flex justify-center items-center flex-col hover:text-2xl  text-red-500 transition-all  duration-300 py-3 hover:text-red-500' onClick={() => likeaPost(item._id)} >
                                                    <CiHeart />
                                                    <div className='text-xs  text-stone-900 '>liked by {item.likesCount ? item.likesCount : "0"} </div>
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



                                            <div className='w-full  h-auto  flex justify-between items-center mt-2'>
                                                <div className=' flex items-end gap-[10px] bg-transparent'>
                                                <UserProfileModal setOpen={setModalIsOpen} open={modalIsOpen}  userData={userData} />

                                                    <span className='text-xs'>{item.postedBy ? item.postedBy.email : "nothing"}</span>


                                                </div>
                                                <div className='flex items-center gap-3'>

                                                    <span className='text-[10px]'>{item.createdAt ? format(item.createdAt) : "none"}</span>
                                                    <button><FaDotCircle /></button>


                                                </div>

                                            </div>
                                            <div
                                                className="h-80 md:h-[500px] rounded-lg md:w-[90%] w-80 "
                                               
                                                style={{
                                                    backgroundImage: `url(${item.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            ></div>
                                            <div className='w-full h-auto p-3 flex md:hidden    justify-around rounded-lg'>
                                                <button onClick={() => likeaPost(item._id)}> <CiHeart /></button>
                                                <button> <MdChat onClick={() => setComment(!comment)} /></button>
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
    </div>
  )
}

export default CommunityPosts