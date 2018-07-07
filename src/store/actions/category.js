import * as actionTypes from './actionTypes';

export const fetchCategoriesStart = () => ({
  type: actionTypes.FETCH_CATEGORIES_START
});

export const fetchCategories = (token, userId) => ({
  type: actionTypes.FETCH_CATEGORIES,
  token,
  userId
});

export const fetchCategoriesSuccess = categories => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  categories
});

export const fetchCategoriesFail = error => ({
  type: actionTypes.FETCH_CATEGORIES_FAIL,
  error
});
