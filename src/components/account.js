import React, { useEffect, useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { FaArrowDown, FaDiceThree, FaPlus } from 'react-icons/fa6';
import { getUserProfile } from '../utils/communityServices';
import SetProfileEditModal from './setProfileEditModal';

function Account() {
  const [userProfile, setUserProfile] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getUserProfile();
        setUserProfile(profileData.user);
        setUserPosts(profileData.user.posts);
       
        setTimeout(() => {
            setLoading(false); // Set loading to false when data is fetched
            
        }, 2000);
       
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);


  const renderUserProfile = () => (
    <div className='w-full h-full flex flex-col gap-4 p-2'>
    <div className='w-full flex justify-between items-center'>
      <div className='flex items-center  gap-1 text-xl'>
        <span>{userProfile.email ? userProfile.email : 'none  '}</span>{' '}
        <FaArrowDown className='text-xs' />
      </div>
      <div className='flex items-center  gap-3  text-xs'>
        <FaPlusSquare className='text-black ' />{' '}
        <FaDiceThree className='text-black ' />
      </div>
    </div>
    <div className='w-full flex justify-between items-center'>
      <div
        className='w-24 h-24 rounded-full bg-white relative'
        style={{
          backgroundImage: `url(${userProfile.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <FaPlus className='absolute bottom-1 p-1 bg-black rounded-full text-white text-xl right-1' />
      </div>
      <div className='  flex flex-col justify-start items-center '>
        <div>{userProfile.posts ? userProfile.posts.length : '0'}</div>
        <div>posts</div>
      </div>
      <div className='  flex flex-col justify-start items-center '>
        <div>{userProfile.followersCount ? userProfile.followersCount.length : '0'}</div>
        <div>following</div>
      </div>
      <div className='  flex flex-col justify-start items-center '>
        <div>{userProfile.followingCount ? userProfile.followingCount.length : '0'}</div>
        <div>followers</div>
      </div>
    </div>
    <div className='w-full flex flex-col gap-1'>
      <div className='p-3 w-44 rounded-lg bg-stone-50 bg-opacity-80'></div>
      <div className='p-3 w-32 rounded-lg bg-stone-50 bg-opacity-80'></div>
      <div className='p-3 w-44 rounded-lg bg-stone-50 bg-opacity-80'></div>
    </div>
    <div className='w-full flex  gap-1'>
      <div className='md:p-2 p-1 w-1/2 rounded-lg bg-stone-50 bg-opacity-80 font-bold'>
        <SetProfileEditModal setOpen={setOpen} open={open} />
      </div>
      <button className='md:p-2 p-1 w-1/2 rounded-lg bg-stone-50 bg-opacity-80 font-bold'>share profile</button>
    </div>
    <div className='grid-container grid w-full grid-cols-3 md:gap-2 gap-1'>
      {/* Conditionally render skeleton loading or user posts */}
      {
        // Render user posts when data is fetched
        userPosts.map((post) => (
          <div
            key={post._id}
            className='bg-stone-50 rounded-lg bg-opacity-80 text-center text-3xl md:h-52 h-32'
            style={{ backgroundImage: `url(${post.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
          ></div>
        ))
        }
    </div>
  </div>
  );



  const renderSkeleton = () => {
    return (
        
            <div className='w-full h-full flex flex-col gap-4 p-2'>
              {/* Email and actions section */}
              <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-1 text-xl'>
                  <div className='skeleton-email w-24 h-4'></div>
                  <div className='skeleton-arrow-down w-4 h-4'></div>
                </div>
                <div className='flex items-center gap-3 text-xs'>
                  <div className='skeleton-plus-square w-4 h-4'></div>
                  <div className='skeleton-dice-three w-4 h-4'></div>
                </div>
              </div>
        
              {/* User profile information */}
              <div className='w-full flex justify-between items-center'>
                <div className='w-24 h-24 rounded-full bg-stone-50'></div>
                <div className='flex flex-col justify-start items-center'>
                  <div className='skeleton-posts w-8 h-4'></div>
                  <div className='skeleton-text w-6 h-3 mt-1'></div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                  <div className='skeleton-followers w-8 h-4'></div>
                  <div className='skeleton-text w-6 h-3 mt-1'></div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                  <div className='skeleton-following w-8 h-4'></div>
                  <div className='skeleton-text w-6 h-3 mt-1'></div>
                </div>
              </div>
        
              {/* Additional content */}
              <div className='w-full flex flex-col gap-1'>
                <div className='skeleton-content w-44 h-12 rounded-lg bg-stone-50'></div>
                <div className='skeleton-content w-32 h-12 rounded-lg bg-stone-50'></div>
                <div className='skeleton-content w-44 h-12 rounded-lg bg-stone-50'></div>
              </div>
        
              {/* Action buttons */}
              <div className='w-full flex gap-1'>
                <div className='md:p-2 p-1 w-1/2 rounded-lg bg-stone-50 font-bold'></div>
                <button className='md:p-2 p-1 w-1/2 rounded-lg bg-stone-50 font-bold'></button>
              </div>
        
              {/* User posts */}
              <div className='grid-container grid w-full grid-cols-3 md:gap-2 gap-1'>
                {/* Render skeleton UI for posts */}
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className='skeleton-post'></div>
                ))}
              </div>
            </div>
    );
  
  };

  return <>
    {!loading?renderUserProfile():renderSkeleton()}
    
  </>
  
}

export default Account;