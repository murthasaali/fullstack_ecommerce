import React, { useState, useEffect } from 'react';
import { getAllUnfollowedUsers } from '../utils/followService';
import { BiCheckDouble } from 'react-icons/bi';
import { format } from 'timeago.js'
import UserChatModal from './userChatModal';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

function Unfollowlist() {
  const [unfollowedUsers, setUnfollowedUsers] = useState([]);
  const [chattedUsers, setChattedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user
  const [modalOpen, setModalOpen] = useState(false); // State fo
  const [inputMessage, setInputMessage] = useState('');

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

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        senderId: localStorage.getItem('userId'),
        receiverId: '65d4aa9bf8eabcb3707fd65e', // Replace with the receiver's ID
        message: inputMessage,
      };
      socket.emit('message', newMessage);
      setInputMessage('');
    }
  };
  return (
    <div className='w-full h-full p-3 flex flex-col justify-start items-start gap-2 '>
      {/* Render unfollowed users */}
      {unfollowedUsers.map(user => (
        <div key={user._id}  onClick={() => { setSelectedUser(user); setModalOpen(true); }} className='px-2 h-16 rounded-3xl gap-3 w-full relative flex justify-start items-center mt-2 bg-stone-100 bg-opacity-50'>
           <div className='w-auto flex flex-col'>
                <div className='text-xs'>{user.email} </div>
                <div className='text-xs text-start flex items-end'> <BiCheckDouble className='text-xl text-blue-400'/> last message </div>

              </div>
              <div className='right-2 absolute text-xs '>{format(user.lastChatTime)}</div>
          </div>

      ))}
                {selectedUser && <UserChatModal item={selectedUser} open={modalOpen} setOpen={setModalOpen} user={selectedUser}  sendMessage={sendMessage}/>}

    </div>
  );
}

export default Unfollowlist;
