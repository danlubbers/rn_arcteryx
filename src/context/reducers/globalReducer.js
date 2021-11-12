import {
  EDIT_MENS,
  EDIT_WOMENS,
  FILTERED_PRODUCT,
} from '../../constants/actionTypes';

const globalReducer = (state, {type, payload}) => {
  switch (type) {
    case EDIT_MENS:
      return {
        ...state,
        gender: 'mens',
        category: 'Mens Products',
      };
    case EDIT_WOMENS:
      return {
        ...state,
        gender: 'womens',
        category: 'Womens Products',
      };
    case FILTERED_PRODUCT:
      return {
        ...state,
        gender: payload.gender,
        // category: payload.category,
        filteredProduct: payload,
      };
  }
};

export default globalReducer;
