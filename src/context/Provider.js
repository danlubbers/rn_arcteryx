import React, {createContext, useReducer} from 'react';
import globalReducer from './reducers/globalReducer';
import initialGlobalState from './initialState/globallState';
import {query} from '../utils/contentful-query';
import useContentful from '../hooks/use-contentful';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    initialGlobalState,
  );

  const {products} = useContentful(query, null);

  return (
    <GlobalContext.Provider value={{globalState, globalDispatch, products}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
