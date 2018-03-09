import * as types from './actionTypes';
import categoryApi from '../api/mockCategoryApi';

export function loadCategoriesSuccess(categories) {
  return {
    type: types.LOAD_CATEGORIES_SUCCESS,
    categories
  }
}

export function loadCategories() {
  return dispatch => {
    return categoryApi.getAllCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    })
  };
}

export const toggleVisibility = category => ({type: types.TOGGLE_VISIBILITY, category});
