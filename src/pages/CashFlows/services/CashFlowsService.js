/* eslint-disable */
import axios from 'axios';
import * as AppUtils  from '@/constants/options'
import constants from '@/constants';

const baseURL = "/cashflows ";

const CashFlowsService = {
  index() {
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}`)
      .then(resp => {
        this.formatResponseData(resp.data.cash_flows);
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
  async store(enrollment) {
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
    console.log(data)
    const format = (item) => {
      item.cash_flow_type_formated = this.getCashFlowTypeText(item.cash_flow_type);
      item.movement_type = this.getCashFlowMovementTypeText(item.movement_type);
      item.payment_type = this.getCashFlowPaymentTypeText(item.payment_type);
      item.value = `R$ ${item.value}`;
      item.created_at = `${item.created_at.substr(8, 2)}/${item.created_at.substr(5, 2)}/${item.created_at  .substr(0, 4)}`;;
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
  formatRequestInstallment(data){
    data.status = 'unpaid';
    data.enrollment_id = 70;

    return data;
  },
  getCashFlowTypeText(value){
    if(!value) return "";
    return AppUtils.getOptionText('cash_flow_type', value);
  },
  getCashFlowMovementTypeText(value){
    if(!value) return "";
    return AppUtils.getOptionText('cash_flow_movement_type', value);
  },
  getCashFlowPaymentTypeText(value){
    if(!value) return "";
    return AppUtils.getOptionText('cash_flow_payment_type', value);
  },
}

export default CashFlowsService;