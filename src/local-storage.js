export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem("authToken", authToken);
  } catch (e) {
    console.log(
      "Could not save token to local storage. Fear not; it just means the user will have to login again if s/he leaves the site."
    );
  }
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (e) {}
};
