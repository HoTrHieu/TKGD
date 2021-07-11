import React from 'react';


const CardContext = React.createContext({
  listCard : [],
  updateListCard: () => {},
  listFavorite: [],
  updateListFavorite: () => {},
});

export const CardProvider = CardContext.Provider
export const CardConsumer = CardContext.Consumer
export default CardContext