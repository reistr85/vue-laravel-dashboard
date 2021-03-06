export const OPTIONS_CASH_FLOW_TYPE = [
  {id: 1, text: "Mensalidade", value: 'App\\Models\\EnrollmentInstallment' },
]

export const OPTIONS_CASH_FLOW_MOVEMENT_TYPE = [
  {id: 1, text: "Entrada", value: 'received' },
  {id: 1, text: "Saída", value: 'payment' },
]

export const OPTIONS_CASH_FLOW_PAYMENT_TYPE = [
  {id: 1, text: "Dinheiro", value: 'cash' },
  {id: 1, text: "Cartão", value: 'card' },
  {id: 1, text: "Boleto", value: 'billet' },
  {id: 1, text: "Cheque", value: 'check' },
  {id: 1, text: "Outros", value: 'other' },
]

export const OPTIONS_INSTALLMENT_STATUS = [
  {id: 1, text: 'Não Pago', value: 'unpaid' },
  {id: 2, text: 'Pago', value: 'paid' },
]

export const options = [{
  cash_flow_type: OPTIONS_CASH_FLOW_TYPE,
  cash_flow_movement_type: OPTIONS_CASH_FLOW_MOVEMENT_TYPE,
  cash_flow_payment_type: OPTIONS_CASH_FLOW_PAYMENT_TYPE,
  installment_status: OPTIONS_INSTALLMENT_STATUS,
}]

export function getOptionText(key, value) {
  if (value && options[0][key]) {
    const item = options[0][key].find((element) => element.value === value);
    return (item && item.text) || '';
  }
  return '';
}