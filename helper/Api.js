import axios from "axios";

const BASE_URL = 'http://4cb3-122-180-84-21.ngrok.io/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
