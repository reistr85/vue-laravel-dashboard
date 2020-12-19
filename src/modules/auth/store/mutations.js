import * as types from './mutation-types';

export default {
  [types.AUTH_SET_USER](state, data) {
    state.user = data;
  },
  [types.AUTH_REQUEST](state) {
    state.status = !state.status;
  },
  [types.AUTH_SUCCESS](state, data) {
    // state.status = 'success';
    state.access_token = data.token;
    state.user = data.user;
  },
  [types.LOGOUT](state) {
    state.status = '';
    state.access_token = '';
  },
};
