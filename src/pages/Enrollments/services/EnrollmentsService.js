import axios from 'axios'

const baseURL = "/enrollments";

const EnrollmentsService = {
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
  show(id) {
    return new Promise((resolve, reject) => {
      
      axios.get(`${baseURL}/${id}`)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  store(enrollment) {
    return new Promise((resolve, reject) => {
      axios.post(`${baseURL}`, enrollment)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })
    })
  },
  update(enrollment) {
    return new Promise((resolve, reject) => {
      axios.put(`${baseURL}/${enrollment.id}`, enrollment)
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

export default EnrollmentsService;