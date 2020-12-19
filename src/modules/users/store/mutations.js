import * as types from './mutation-types';

export default {
  [types.REGISTER_REQUEST](state) {
    state.status = !state.status;
  },
};
