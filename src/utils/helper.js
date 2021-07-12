export const formatMoney = (numberPrice) => {
  return numberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const currency = "US";

export const keySearch = {
  BDF: 'birthday',
  CON: 'congratulation',
  GOF: 'opening',
  TWF: 'wedding',
  LUF: 'love',
  FLD: 'floral'
}