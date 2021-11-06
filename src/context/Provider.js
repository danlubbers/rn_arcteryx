import React, {createContext, useReducer} from 'react';
import productInitialState from './initialState';

export const GlobalContext = createContext();

const EDIT_MENS = 'EDIT_MENS';
const EDIT_WOMENS = 'EDIT_WOMENS';

const productsReducer = (state, action) => {
  console.log('productReducer', state, action);
  switch (action) {
    case EDIT_MENS:
      return {
        ...state,
        product: {
          ...state.product,
          gender: 'mens',
        },
      };
    case EDIT_WOMENS:
      return {
        ...state,
        product: {
          ...state.product,
          gender: 'womens',
        },
      };
  }
};

const GlobalProvider = ({children}) => {
  const [initialState, initialDispatch] = useReducer(
    productsReducer,
    productInitialState,
  );

  return (
    <GlobalContext.Provider value={{initialState, initialDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
