const jwtKey = 'social-media-app-jwt';

// Anonymous functions exported as named constants

// setJwt: This function takes a jwt parameter and sets it in the browser's local storage using localStorage.setItem.
export const setJwt = (jwt) =>{
  localStorage.setItem(jwtKey, jwt);
}

// getJwt: This function retrieves the JWT token from the local storage using localStorage.getItem and returns it.
export const getJwt = () => {
  const jwt = localStorage.getItem(jwtKey);

  return jwt;
}

// removeJwt: This function removes the JWT token from the local storage using localStorage.removeItem.
export const removeJwt = () => {
  localStorage.removeItem(jwtKey);
}
