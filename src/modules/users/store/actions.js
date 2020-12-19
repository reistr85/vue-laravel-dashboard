import * as types from './mutation-types';
import axios from '../../../services';

export const ActionRegister = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit(types.REGISTER_REQUEST);

    const params = {
      type: data.type,
      terms: data.terms,
      name: data.user.name,
      email: data.user.email,
      phone: data.user.phone,
      password: data.user.password,
    }

    axios.post('/users', params)
    .then(resp => {
      commit(types.REGISTER_REQUEST);
      resolve(resp);
    })
    .catch(err => {
      commit(types.REGISTER_REQUEST);
      reject(err);
    })
  })
}