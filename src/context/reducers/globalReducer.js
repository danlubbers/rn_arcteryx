import {EDIT_MENS, EDIT_WOMENS} from '../../constants/actionTypes';

const globalReducer = (state, action) => {
  switch (action) {
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
  }
};

export default globalReducer;
