export default {
  status: '',
  access_token: localStorage.getItem('psiplan.access_token') || '',
  user: JSON.parse(localStorage.getItem('psiplan.user')) || '',
};
