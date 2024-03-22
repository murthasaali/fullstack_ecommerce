import axios from 'axios';
import toast from 'react-hot-toast'

export const getAllUnfollowedUsers = async (userId) => {
  try {
    const token = localStorage.getItem("token")
    

    const response = await axios.get(`http://localhost:3001/follows/unfollowingusers/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching unfollowed users:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const followUser = async (userIdToFollow) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`http://localhost:3001/follows/follow/${userIdToFollow}`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    

    console.log(response.data);
    toast.success("you started following")
    return response.data;
  } catch (error) {
    console.error('Error following user:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

