// communityServices.js

import axios from 'axios';

// Function to fetch all posts
export const getAllPosts = async () => {
    try {
      const token=localStorage.getItem("token")
      console.log(token)
    // Send a GET request to the appropriate endpoint to fetch all posts
    const response = await axios.get(`http://localhost:3001/posts/getposts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    // Return the data from the response
    console.log(response.data)   
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching all posts:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};
