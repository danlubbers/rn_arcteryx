import React, {createContext, useReducer} from 'react';
import globalReducer from './reducers/globalReducer';
import initialGlobalState from './initialState/globalState';
import {query} from '../utils/contentful-query';
import useContentful from '../hooks/use-contentful';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    initialGlobalState,
  );

  // console.log(`PROVIDER:`, globalState);
  const {products} = useContentful(query);
  return (
    <GlobalContext.Provider value={{globalState, globalDispatch, products}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
