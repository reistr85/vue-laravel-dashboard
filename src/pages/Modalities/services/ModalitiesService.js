import axios from 'axios'

const baseURL = "/modalities";

const ModalitiesService = {
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
  },
  formatDataInSelect(data){
    const arr = [];
    data.forEach(item => {
      arr.push({
        id: item.id,
        text: item.description,
      })
    });

    return arr;
  }
}

export default ModalitiesService;