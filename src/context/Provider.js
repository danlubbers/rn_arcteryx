import React, {createContext, useReducer} from 'react';
import productInitialState from './initialState';
import {EDIT_MENS, EDIT_WOMENS} from '../constants/actionTypes';

export const GlobalContext = createContext();

const productsReducer = (state, action) => {
  switch (action) {
    case EDIT_MENS:
      return {
        ...state,
        globalState: {
          ...state.globalState,
          gender: 'mens',
          category: 'Mens Products',
        },
      };
    case EDIT_WOMENS:
      return {
        ...state,
        globalState: {
          ...state.globalState,
          gender: 'womens',
          category: 'Womens Products',
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
