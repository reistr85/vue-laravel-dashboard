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
  getUser(user_id) {
    return new Promise((resolve, reject) => {
      
      axios.get(`/users/${user_id}`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  create(user) {
    return new Promise((resolve, reject) => {
      axios.post(`/users`, user)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  update(user) {
    return new Promise((resolve, reject) => {
      axios.put(`/users/${user.id}`, user)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  delete(user_id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/users/${user_id}`)
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