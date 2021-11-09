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
  console.log(`globalState`, globalState);
  const {products} = useContentful(query, null);
  // console.log(`globalState`, globalState);
  return (
    <GlobalContext.Provider value={{globalState, globalDispatch, products}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
