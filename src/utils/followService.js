import axios from 'axios';

export const getAllUnfollowedUsers = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`http://localhost:3001/follows/unfollowusers/${userId}`, {
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
