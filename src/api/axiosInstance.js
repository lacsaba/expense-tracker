import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://awesome-expense-tracker.firebaseio.com/'
});

export default axiosInstance;
