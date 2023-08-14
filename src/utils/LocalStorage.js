export const saveToken = (token) => {
  sessionStorage.setItem("TOKEN_KEY", token);
};

export const getToken = () => {
  return sessionStorage.getItem("TOKEN_KEY");
};

export const removeSession = () => {
  sessionStorage.removeItem("TOKEN_KEY");
  sessionStorage.removeItem("USER");
};

