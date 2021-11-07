import React, {createContext, useReducer} from 'react';
import globalReducer from './reducers/globalReducer';
import productsReducer from './reducers/productsReducer';
import initialGlobalState from './initialState';
import productInitialState from './initialState';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    initialGlobalState,
  );
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{globalState, globalDispatch, productsState, productsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
