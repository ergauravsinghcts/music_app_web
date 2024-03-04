/**
 * create a logout function to clear localstorage
 */

export function logout() {
  localStorage.clear();
}
/**
 * create a function to check if user is logged in
 * @returns {boolean} true or false
 */
export function isLoggedIn() {
  return localStorage.getItem("token") !== null;
}

/**
 * create a function to get token and generate authorization header
 */
export function getAuthHeader() {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
      "Authorization": `Bearer ${getToken()}`,
    },
  };
}

/**
 * create a function to get the token from localstorage
 * @returns {string} token
 */
export function getToken() {
  return localStorage.getItem("token").trim();
}
/**
 * create a function to get the user from localstorage
 * @returns {object} user
 */
export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
/**
 * create a function to set the user and token in localstorage
 * @param {object} user
 * @param {string} token
 */
export function setUserAndToken(token) {
  // parse token to get user
  const user = JSON.parse(atob(token.split(".")[1]));
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
}
/**
 * create a function to remove the user and token from localstorage
 */
export function removeUserAndToken() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
/**
 * create a function to get the user id from localstorage
 * @returns {string} user id
 */
export function getUserId() {
  return getUser().id;
}
/**
 * create a function to get the user name from localstorage
 * @returns {string} user name
 */
export function getUserName() {
  return getUser().name;
}
/**
 * create a function to get the user email from localstorage
 * @returns {string} user email
 */
export function getUserEmail() {
  return getUser().email;
}
