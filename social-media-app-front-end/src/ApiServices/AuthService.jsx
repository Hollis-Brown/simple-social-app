import { API_URL } from '../environment';

export const register = async (body) => {

  console.log('LogIn request body:', body);

  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  console.log('LogIn response data:', data);
  return data;
}

export const LogIn = async (body) => {
  const response = await fetch(`${API_URL}/log-in`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  return data;
}