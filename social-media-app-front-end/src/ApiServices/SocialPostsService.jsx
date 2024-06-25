// Import API base URL from environment
import { API_URL } from "../environment";

// Import JWT retrieval function from JwtService
import { getJwt } from "./JwtService";

// **Creates a new social post** (async)
export const createSocialPost = async (body) => {
  // Sends post data (JSON) with JWT for authentication
  const response = await fetch(`${API_URL}/social_post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Sending JSON data
      Authorization: `Bearer ${getJwt()}`, // Include JWT for security
    },
    body: JSON.stringify(body),
  });
  // Returns parsed response (likely success/error)
  return await response.json();
};// To create a new social post and return the server's response.


// **Retrieves user's social posts** (async)
export const getUserSocialPosts = async () => {
  // Fetches user's posts with JWT for authentication
  const response = await fetch(`${API_URL}/social_post`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  });
  // Returns parsed response (user's social posts)
  return await response.json();
};// To retrieve the user's social posts and return them.

// **Deletes a social post by ID** (async)
export const deleteSocialPost = async (postId) => {
  // Sends delete request with JWT for authentication
  const response = await fetch(`${API_URL}/social_post/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  });
  // Returns parsed response (likely success/error)
  return await response.json();
};// To delete a social post by ID and return the server's response.


// **Updates a social post** (async)
export const updateSocialPost = async (body) => {
  // Sends updated post data (JSON) with JWT for authentication
  const response = await fetch(`${API_URL}/social_post`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
    body: JSON.stringify(body),
  });
  // Returns parsed response (likely success/error)
  return await response.json();
};// To update a social post and return the server's response.



