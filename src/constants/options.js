export const OPTIONS_INSTALLMENT_STATUS = [
  {id: 1, text: "Não Pago", value: "unpaid" },
  {id: 2, text: "Pago", value: "paid" }
]

export const options = [{
  installment_status: OPTIONS_INSTALLMENT_STATUS,
}]

export function getOptionText(key, value) {
  if (value && options[0][key]) {
    const item = options[0][key].find((element) => element.value === value);
    return (item && item.text) || '';
  }
  return '';
}