import axios from 'axios';

const BASE_URL = 'https://thebetter.bsgroup.eu';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
