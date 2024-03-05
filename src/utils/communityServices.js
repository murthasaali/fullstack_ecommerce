// communityServices.js

import axios from 'axios';

// Function to fetch all posts
export const getAllPosts = async () => {
    try {
      const token=localStorage.getItem("token")
      console.log(token)
    // Send a GET request to the appropriate endpoint to fetch all posts
    const response = await axios.get(`https://ecommerce-api-shne.onrender.com/posts/getposts`, {
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
export const likeaPost = async (postId) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);

    // Send a POST request to the appropriate endpoint to like the post
    const response = await axios.post(
      `https://ecommerce-api-shne.onrender.com/posts/likepost`,
      { postId }, // Sending postId in the request body
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // Return the data from the response
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error('Error liking the post:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

// Function to fetch user profile
export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(token);

    // Send a GET request to the appropriate endpoint to fetch user profile
    const response = await axios.get(`https://ecommerce-api-shne.onrender.com/auth/getUserDetails/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Return the data from the response
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching user profile:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};
