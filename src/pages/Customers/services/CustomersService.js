import axios from 'axios'

const baseURL = "/customers";

const CustomersService = {
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
  show(obj_id) {
    return new Promise((resolve, reject) => {
      
      axios.get(`${baseURL}/${obj_id}`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  store(obj) {
    return new Promise((resolve, reject) => {
      axios.post(`${baseURL}`, obj)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  update(obj) {
    return new Promise((resolve, reject) => {
      axios.put(`${baseURL}/${obj.id}`, obj)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${baseURL}/${id}`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  }
}

export default CustomersService;