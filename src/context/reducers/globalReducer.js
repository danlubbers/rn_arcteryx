import {EDIT_MENS, EDIT_WOMENS, EDIT_SLUG} from '../../constants/actionTypes';

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
    case EDIT_SLUG:
      return {
        ...state,
        gender: null,
        category: null,
        slug: payload.slug,
      };
  }
};

export default globalReducer;
