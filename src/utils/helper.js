export const formatMoney = (numberPrice) => {
  return numberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}