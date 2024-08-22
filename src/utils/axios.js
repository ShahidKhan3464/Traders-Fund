import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_PTF_API_V2;

export default axios.create({
  baseURL: API_BASE_URL
});
