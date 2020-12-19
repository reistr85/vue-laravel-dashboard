import * as types from './mutation-types';
import axios from '../../../services';
import router from '../../../router';

export const ActionLogin = ({ commit, dispatch }, user) => {
  return new Promise((resolve, reject) => {
    commit(types.AUTH_REQUEST);

    axios.post('/login', user)
    .then(resp => {
      const token = resp.data.access_token;
      const user = resp.data.user;
      localStorage.setItem('psiplan.access_token', token);
      localStorage.setItem('psiplan.user', JSON.stringify(user));

      commit(types.AUTH_SUCCESS, {token, user});
      commit(types.AUTH_REQUEST);
      commit(types.AUTH_SET_USER), user;
      resolve(resp);
    })
    .catch(err => {
      commit(types.AUTH_REQUEST);
      dispatch('ActionCleanLocalStorage');

      reject(err);
    })
  })
}

export const ActionMe = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    axios.post('/me')
    .then(resp => {
      commit(types.AUTH_SET_USER, resp.data.user);
      localStorage.setItem('psiplan.user', JSON.stringify(resp.data.user));

      resolve(resp);
    })
    .catch(err => {
      dispatch('ActionLogout');

      router.push({name: 'home'});
      reject(err);
    })
  })
}

export const ActionLogout = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    axios.post('/logout')
    .then(resp => {
      commit(types.LOGOUT, {});
      dispatch('ActionCleanLocalStorage');

      router.push({name: 'home'});
      resolve(resp);
    })
    .catch(err => {
      commit(types.LOGOUT, {});
      dispatch('ActionCleanLocalStorage');
      
      reject(err);
    })
  })
}

export const ActionCleanLocalStorage = () => {
  localStorage.removeItem("psiplan.access_token");
  localStorage.removeItem('psiplan.user');
}