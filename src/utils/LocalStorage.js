export const saveSession = (token, user, comment) => {
  sessionStorage.setItem("TOKEN_KEY", token);
  sessionStorage.setItem("USERNAME", user.username);
  sessionStorage.setItem("USER_ID", user._id);
  sessionStorage.setItem("USER_EMAIL", user.email);
  sessionStorage.setItem("USER_PROFILE", user.url_image_profile);
};

export const getToken = () => {
  return sessionStorage.getItem("TOKEN_KEY");
};

export const getUsername = () => {
  return sessionStorage.getItem("USERNAME");
};

export const getUserId = () => {
  return sessionStorage.getItem("USER_ID");
};

export const getUserEmail = () => {
  return sessionStorage.getItem("USER_EMAIL");
};

export const getUserProfile = () => {
  return sessionStorage.getItem("USER_PROFILE");
};

export const getComment = () => {
  return sessionStorage.getItem("USER_PROFILE");
};

export const removeSession = () => {
  sessionStorage.removeItem("TOKEN_KEY");
  sessionStorage.removeItem("USERNAME");
  sessionStorage.removeItem("USER_ID");
  sessionStorage.removeItem("USER_EMAIL");
  sessionStorage.removeItem("USER_PROFILE");
  sessionStorage.removeItem("COMMENT");
};
