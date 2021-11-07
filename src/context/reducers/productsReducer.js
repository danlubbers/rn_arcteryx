import {GET_PRODUCTS} from '../../constants/actionTypes';

const productsReducer = (state, action) => {
  console.log(`state`, state);
  console.log(`action`, action);
  switch (action) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
  }
};

export default productsReducer;
