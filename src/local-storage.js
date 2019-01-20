import jwtDecode from "jwt-decode";
export const loadAuthToken = () => {
  console.log(
    "localStorage.getItem authToken",
    localStorage.getItem("authToken")
  );
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    console.log(
      "Decoded token about to be stored in local-storage: ",
      jwtDecode(authToken)
    );
    localStorage.setItem("authToken", authToken);
    // console.log("Saved authToken to local storage: ", authToken);
    console.log(
      "localStorage.getItem authToken right after you set it, in the very same function: ",
      localStorage.getItem("authToken")
    );
  } catch (e) {
    // console.log(
    //   "Could not save token to local storage. This may annoy the user immensely."
    // );
  }
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (e) {}
};

// snippetCount in localStorage is compared to snippetCount in store when the Talk or Edit page is loaded. If they are different, it is probably due to a page refresh. In any case, you will need to get the snippets from the database again at that point to be sure any changes the user saved are shown on the screen.
export const saveSnippetCountLocal = snippetCount => {
  console.log(snippetCount);
  try {
    localStorage.setItem("snippetCount", snippetCount);
    console.log("Saved snippetCount to local storage: ", snippetCount);
  } catch (e) {
    console.log("Could not save snippetCount to local storage.");
  }
};

export const snippetCountLocal = () => {
  let snippetCount;
  try {
    snippetCount = localStorage.getItem("snippetCount");
  } catch (e) {}
  return snippetCount;
};
