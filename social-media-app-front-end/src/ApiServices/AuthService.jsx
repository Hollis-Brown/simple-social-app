// Import API URL
import { API_URL } from '../environment';


// Register a new user
export const register = async (body) => {
  // Log request body
  console.log('Register request body:', body);

  // Send POST request to /register with JSON data
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  // Parse JSON response
  const data = await response.json();

  // Log response data
  console.log('Register response data:', data);

  // Return response data
  return data;
};// To register a new user and return the server's response.


// Log in a user
export const LogIn = async (body) => {
  // Send POST request to /log-in with JSON data
  const response = await fetch(`${API_URL}/log-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  // Parse JSON response
  const data = await response.json();

  // Return response data
  return data;
};// To log in a user and return the server's response.
