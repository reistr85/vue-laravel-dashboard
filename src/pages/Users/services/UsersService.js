import axios from 'axios'

const UsersService = {
  getAllUsers() {
    return new Promise((resolve, reject) => {
      
      axios.get('/users')
      .then(resp => {
        
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  update(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      axios.put('/users', data)
      .then(resp => {
        
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  }
}

export default UsersService;