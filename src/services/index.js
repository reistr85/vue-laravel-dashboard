import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;

axios.interceptors.request.use(
  async config => {
    const access_token = localStorage.getItem("aguaritmo.access_token");
    
    config.headers = { 
      'Authorization': `Bearer ${access_token}`,
      'ApiKey': process.env.VUE_APP_API_KEY,
    }
    
    return config;
  },
  error => {
    Promise.reject(error)
});

axios.interceptors.response.use(
  async config => {
    return config;
  },
  error => {
    if(error.response.status == 401){
      window.location="/#/login";
    }
    Promise.reject(error)
});

export default axios;