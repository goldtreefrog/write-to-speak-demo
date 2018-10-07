export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem("authToken", authToken);
  } catch (e) {
    console.log(
      "Could not save token to local storage. This may annoy the user immensely."
    );
  }
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (e) {}
};
