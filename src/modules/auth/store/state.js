export default {
  status: '',
  access_token: localStorage.getItem('aguaritmo.access_token') || '',
  user: JSON.parse(localStorage.getItem('aguaritmo.user')) || '',
};
