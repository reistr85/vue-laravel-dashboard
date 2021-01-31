import axios from 'axios'

const UsersService = {
  login(data) {
    return new Promise((resolve, reject) => {
      
      axios.post('/login', data)
      .then(res => {
        //localStorage.setItem('aguaritmo.user', JSON.stringify(res.data.user));
        //localStorage.setItem('aguaritmo.access_token', res.data.access_token);

        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
}

export default UsersService;