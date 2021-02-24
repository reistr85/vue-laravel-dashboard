export const OPTIONS_INSTALLMENT_STATUS = [
  {id: 1, text: "Não Pago", value: "unpaid" },
  {id: 2, text: "Pago", value: "paid" }
]

export const options = [{
  installment_status: OPTIONS_INSTALLMENT_STATUS,
}]

export function getOptionText(key, value) {
  const options = this.options[0];
  
  if (value && options[key]) {
    const item = options[key].find((element) => element.value === value);
    return (item && item.text) || '';
  }
  return '';
}