/* eslint-disable */
import axios from 'axios';
import * as AppUtils  from '@/constants/options'

const baseURL = "/enrollments";

const EnrollmentsService = {
  index() {
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}`)
      .then(resp => {
        this.formatResponseData(resp.data.enrollments);
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
        this.formatResponseData(resp.data.enrollment, 'row');
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
  },
  formatResponseData(data, type = 'table'){
    const format = (item) => {
      item.price = `R$ ${item.price}`;

      if(item.installments){
        item.installments.forEach((item) => {
          item.price_formated = `R$ ${item.price}`;
          item.discount_formated = `R$ ${item.discount}`;
          item.due_date = `${item.due_date.substr(8, 2)}/${item.due_date.substr(5, 2)}/${item.due_date.substr(0, 4)}`;
          item.status_formated = this.getInstallmentStatusText(item.status);
        });
      }
    }
    
    let responseData = {};

    if(type == 'table'){
      data.forEach((item) => {
        format(item);
      });
      responseData = { data };
      return responseData;
    }else{
      format(data);
      return responseData;
    }
  },
  getInstallmentStatusText(value){
    if(!value) return "";
    return AppUtils.getOptionText('installment_status', value);
  },
}

export default EnrollmentsService;