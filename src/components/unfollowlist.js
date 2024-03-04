import React, { useState, useEffect } from 'react';
import { getAllUnfollowedUsers } from '../utils/followService';

function Unfollowlist() {
  const [unfollowedUsers, setUnfollowedUsers] = useState([]);

  useEffect(() => {
    // Fetch unfollowed users when the component mounts
    getAllUnfollowedUsers('65d4aa9bf8eabcb3707fd65e') // Pass the actual user ID here
      .then(users => {
        // Update the component state with the fetched data
        setUnfollowedUsers(users);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='w-full overflow-x-scroll h-52   gap-2 flex p-3  px-10   '>
      {/* Render unfollowed users */}
      {unfollowedUsers.map(user => (
        <div key={user._id} className=' flex flex-col h-full w-full rounded-full items-center  bg-opacity border-black '>
       
        <div  className='md:w-18 w-12 md:h-18 h-12   rounded-full bg-stone-50 bg-opacity-25 border-black '>
       
        </div>
        <div className='text-red-600 text-xs'>{user.email.slice(0,6)}</div>
        </div>
      ))}
    </div>
  );
}

export default Unfollowlist;
