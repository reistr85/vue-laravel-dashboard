export const isLoggedIn = (state) => {
  return !!state.access_token;
};

export const getStatus = (state) => {
  return state.status;
}

export const getUser = (state) => {
  return state.user || {};
}