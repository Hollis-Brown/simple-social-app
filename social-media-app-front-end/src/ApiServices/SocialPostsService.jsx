import { API_URL } from "../environment";
import { getJwt } from "./JwtService";

export const createSocialPost = async (body) => {
  const response = await fetch(`${API_URL}/social_post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  console.log("Create post response:", data); // Debugging line
  return data;
};

export const getUserSocialPosts = async () => {
  const response = await fetch(`${API_URL}/social_post`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  });

  const data = await response.json();
  console.log("Fetched posts response:", data); // Debugging line
  return data;
};

export const deleteSocialPost = async (postId) => {
  const response = await fetch(`${API_URL}/social_post/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
  });

  const data = await response.json();

  return data;
};

export const updateSocialPost = async (body) => {
  const response = await fetch(`${API_URL}/social_post`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
