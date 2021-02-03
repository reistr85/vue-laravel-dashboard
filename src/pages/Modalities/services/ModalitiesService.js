import axios from 'axios'

const baseURL = "/modalities";

const UsersService = {
  index() {
    return new Promise((resolve, reject) => {
      
      axios.get(`${baseURL}`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  show(user_id) {
    return new Promise((resolve, reject) => {
      
      axios.get(`${baseURL}/${user_id}`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  store(user) {
    return new Promise((resolve, reject) => {
      axios.post(`${baseURL}`, user)
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
      axios.put(`${baseURL}/${user.id}`, user)
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
      axios.delete(`${baseURL}/${user_id}`)
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