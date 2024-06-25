const jwtKey = 'social-media-app-jwt';


// setJwt: Saves your secure login token (JWT) for the app.
export const setJwt = (jwt) => {
  localStorage.setItem(jwtKey, jwt);
}

// getJwt: Grabs your secure login token (JWT) from the app storage.
export const getJwt = () => {
  const jwt = localStorage.getItem(jwtKey);
  return jwt;
}

// removeJwt: Deletes your secure login token (JWT) when you log out.
export const removeJwt = () => {
  localStorage.removeItem(jwtKey);
}

// It stores, retrieves, and removes JWTs from local storage using a secret key.
