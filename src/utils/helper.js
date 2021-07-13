export const formatMoney = (numberPrice) => {
  return numberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const currency = "US";

export const maxPerPage = 9;

export const keySearch = {
  BDF: 'birthday',
  CON: 'congrats',
  GOF: 'opening',
  TWF: 'wedding',
  LUF: 'love',
  FLD: 'floral'
}