export const isLoggedIn = (state) => {
  return !!state.access_token;
};

export const getStatus = (state) => {
  return state.status;
}

export const getUser = (state) => {
  return state.user || {};
}

export const getPlanId = (state) => {
  return state.user.plan_id;
}