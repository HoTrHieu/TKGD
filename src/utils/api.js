const axios = require('axios');
const urlRoot = 'http://localhost:5000';

export const getAllProduct = () => {
  return axios({
      method: 'get',
      url: `${urlRoot}/products`,
      responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log(error);
  });
}

export const getProductById = (id) => {
  return axios({
      method: 'get',
      url: `${urlRoot}/products/${id}`,
      responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log(error);
  });
}

export const getFavoriteList = () => {
  return axios({
    method: 'get',
    url: `${urlRoot}/favorites`,
    responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error get favorite', error);
  });
}

export const addFavoriteList = (product) => {
  return axios({
    method: 'post',
    url: `${urlRoot}/favorites`,
    data: {
      ...product
    }
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error add favorite', error);
  });
}

export const deleteFavoriteItem = (id) => {
  return axios({
    method: 'delete',
    url: `${urlRoot}/favorites/${id}`,
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error delete favorite', error);
  });
}

/////
export const getCartList = () => {
  return axios({
    method: 'get',
    url: `${urlRoot}/cart`,
    responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error get cart', error);
  });
}

export const getCartItem = (id) => {
  return axios({
    method: 'get',
    url: `${urlRoot}/cart?id=${id}`,
    responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error get cart item', error);
  });
}

export const addCart = (cart) => {
  return getCartList().then(res => {
    if(res.data) {
      const listCard = res.data || [];
      const index = listCard.findIndex(item => item.id == cart.id);
      //add
      if(index < 0) {
        return axios({
          method: 'post',
          url: `${urlRoot}/cart`,
          data: {
            ...cart
          }
        }).then(result => {
          return result;
        }).catch(function (error) {
          console.log('error add cart', error);
        });
      }else {
        //modify
        const id = cart.id;
        return axios({
          method: 'put',
          url: `${urlRoot}/cart/${id}`,
          data: {
            ...cart
          }
        }).then(result => {
          return result;
        }).catch(function (error) {
          console.log('error modify cart', error);
        });
      }
    }
  })
}

export const clearCart = () => {
  return getCartList().then(res => {
    if(res.data) {
      const listCard = res.data || [];
      const listID = listCard.forEach((item) => {
        const data = axios({
          method: 'delete',
          url: `${urlRoot}/cart/${item.id}`,
        }) 
      })      
    }
  })
}

export const deleteCart = (id) => {
  return axios({
    method: 'delete',
    url: `${urlRoot}/cart/${id}`,
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error delete cart', error);
  });
}

//
export const getRelatedList = () => {
  //relateds
  return axios({
    method: 'get',
    url: `${urlRoot}/relateds`,
    responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error get cart', error);
  });
}

//filter
export const filterByKeySearch = (keySearch) => {
  //relateds
  return axios({
    method: 'get',
    url: `${urlRoot}/products?type=${keySearch}`,
    responseType: 'json'
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error key search cart', error);
  });
}


/////add payment
export const addPayment = (payment) => {
  return axios({
    method: 'post',
    url: `${urlRoot}/payments`,
    data: {
      ...payment
    }
  }).then(result => {
    return result;
  }).catch(function (error) {
    console.log('error add favorite', error);
  });
}