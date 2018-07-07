import axiosInstance from './axiosInstance';

export default class CategoryAPI {
  static getAllCategories(queryParams) {
    return axiosInstance.get('/categories' + queryParams);
  }
}
