export default {
  status: '',
  access_token: localStorage.getItem('company.access_token') || '',
  user: JSON.parse(localStorage.getItem('company.user')) || '',
};
