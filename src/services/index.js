import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
// axios.defaults.baseURL = 'http://localhost:9001/api/v1/academy';

axios.interceptors.request.use(
  async config => {
    // const access_token = localStorage.getItem("company.access_token");
    const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6OTAwMVwvYXBpXC92MVwvYWNhZGVteVwvbG9naW4iLCJpYXQiOjE2MTE4OTMzNzMsImV4cCI6MTYxMTg5Njk3MywibmJmIjoxNjExODkzMzczLCJqdGkiOiJlT09NSkxHM3VnbVZrZ0NYIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.SBwMPc6FTFu5PdnjXcp8FT_Ijt2QCKDbWA6oyXPa2AQ';
    
    config.headers = { 
      'Authorization': `Bearer ${access_token}`,
      'ApiKey': process.env.VUE_APP_API_KEY,
    }
    
    return config;
  },
  error => {
    Promise.reject(error)
});

export default axios;