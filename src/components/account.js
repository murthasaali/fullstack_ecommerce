import React,{useEffect,useState} from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { FaArrowDown, FaDiceThree, FaPlus } from 'react-icons/fa6'
import { getUserProfile } from '../utils/communityServices'

function Account() {
    const [userProfile, setUserProfile] = useState({});
    const [userPOsts, setUserPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const profileData = await getUserProfile();
          setUserProfile(profileData.user);
          setUserPosts(profileData.user.posts);
          console.log(profileData.user)
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className='w-full h-full flex flex-col gap-4 p-2'>
        <div className='w-full  flex justify-between items-center'>

            <div className='flex items-center  gap-1 text-xl'><span>{userProfile.email?userProfile.email:"none  "}</span> <FaArrowDown className='text-xs'/></div>
            <div className='flex items-center  gap-3  text-xs'><FaPlusSquare className='text-black '/> <FaDiceThree className='text-black '/></div>

        </div>
    <div className='w-full flex justify-between items-center'>

        <div className='w-24 h-24 rounded-full bg-white relative'  style={{backgroundImage:`url(${userProfile.image})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <FaPlus className='absolute bottom-1 p-1 bg-black rounded-full text-white text-xl right-1' />

        </div>
        <div className='  flex flex-col justify-start items-center '> 
        <div>{userProfile.posts?userProfile.posts.length:"0"}</div>
        <div>posts</div>
        </div>
        <div className='  flex flex-col justify-start items-center '> 
        <div>{userProfile.followersCount?userProfile.followersCount.length:"0"}</div>
        <div>following</div>
        </div>
        <div className='  flex flex-col justify-start items-center '> 
        <div>{userProfile.followingCount?userProfile.followingCount.length:"0"}</div>
        <div>followers</div>
        </div>

    </div>
    <div className='w-full flex flex-col gap-1'>
        <div className='p-3 w-44 rounded-lg bg-stone-50 bg-opacity-80'></div>
        <div className='p-3 w-32 rounded-lg bg-stone-50 bg-opacity-80'></div>
        <div className='p-3 w-44 rounded-lg bg-stone-50 bg-opacity-80'></div>

    </div>
    <div className='w-full flex  gap-1'>
        <button className='md:p-2 p-1 w-1/2 rounded-lg bg-stone-50 bg-opacity-80 text-center font-bold'> edit profile</button>
        <button className='md:p-2 p-1 w-1/2 rounded-lg bg-stone-50 bg-opacity-80 font-bold'>share profile</button>

    </div>

    <div className='w-full h-12 rounded-lg bg-white '></div>
    <div className="grid-container grid w-full grid-cols-3 md:gap-2 gap-1  ">
   {
    userPOsts.map((post)=>(
        <div className="bg-stone-50 rounded-lg bg-opacity-80 text-center  text-3xl md:h-52 h-32" style={{backgroundImage:`url(${post.image})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
    ))
   }
   
   
 
</div>
    </div>
  )
}

export default Account