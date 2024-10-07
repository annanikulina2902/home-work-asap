import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://vseverske.ru/blog/api/',
    timeout: 10000,
  });

export default axiosInstance