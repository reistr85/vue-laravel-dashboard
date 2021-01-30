import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
// axios.defaults.baseURL = 'http://localhost:9001/api/v1/academy';

axios.interceptors.request.use(
  async config => {
    // const access_token = localStorage.getItem("company.access_token");
    const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6OTAwMVwvYXBpXC92MVwvYWNhZGVteVwvbG9naW4iLCJpYXQiOjE2MTIwMjExNjYsImV4cCI6MTYxMjAyNDc2NiwibmJmIjoxNjEyMDIxMTY2LCJqdGkiOiJmaWsxNExYVnJSYmlLYjZmIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.u98H3Lr6Fewvh_qOP6z-XTOYqrCoRTaGTTAqCt1cGeU';
    
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