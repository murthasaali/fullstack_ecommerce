import React, { useState, useEffect } from 'react';
import { followUser, getAllUnfollowedUsers } from '../utils/followService';
import { HiChatAlt2 } from "react-icons/hi";
import HorizontalScroll from 'react-scroll-horizontal';
import hero from '../assets/profileIcon.jpg'

function Unfollowlist() {
  const [unfollowedUsers, setUnfollowedUsers] = useState([]);

  useEffect(() => {
    // Fetch unfollowed users when the component mounts
    const userId = localStorage.getItem("userId");
    getAllUnfollowedUsers(userId) // Pass the actual user ID here
      .then(users => {
        // Update the component state with the fetched data
        setUnfollowedUsers(users);
        console.log(users);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='md:h-48 flex items-center   justify-center top-6 h-40  overflow-x-auto'> {/* Set the height and overflow properties */}
      <HorizontalScroll style={{top:"20px",paddingLeft:"25px"}}    reverseScroll={true}>
        <div className='flex gap-4'>
          {unfollowedUsers.map(user => (
            <div key={user.id} className=' p-2 md:h-fit bg-stone-800 bg-opacity-50 h-fit md:w-fit w-fit rounded-xl flex flex-col'>
              <div className='w-full p-2 h-fit flex-col rounded-xl flex   gap-[2px] items-center justify-start'>
                {/* <div></div> */}
                <img src={user.image ? user.image : hero} className='md:w-14 w-12 h-12 md:h-14 rounded-full' />
                <div className='p-1 bg-opacity-40 text-stone-50 md:text-[12px] text-[10px]'>{user.email.slice(0, 16)}</div>
              </div>
              <div className='flex  justify-evenly'>
                <button onClick={()=>followUser(user._id)} className='py-0 px-3 text-black font-thin rounded-xl text-xs md:text-md bg-stone-50 bg-opacity-70'>
                  follow
                </button>
                <button>
                  <HiChatAlt2 className='text-3xl text-white' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </HorizontalScroll>
    </div>
  );
}

export default Unfollowlist;
