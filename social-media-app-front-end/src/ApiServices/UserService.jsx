// Key for storing user data in local storage
const userKey = 'social-media-app-user'; 

// Function to save user data extracted from a JWT token
export const setUser = (token) => {
  console.log('Setting user with token:', token);

  // Extract payload from JWT token
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payload = JSON.parse(
    decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    )
  );
    // Store payload in local storage
  localStorage.setItem(userKey, JSON.stringify(payload));
  console.log('setUser payload', payload);
} // To remember the user's identity after they log in.


// Function to retrieve user data from local storage
export const getUser = () => {
  const user = localStorage.getItem(userKey);
  console.log('getUser', user);
  if (user) {
    return JSON.parse(user);
  } else {
    return {  }
  }
}
// To access the user's identity without re-authenticating.  
