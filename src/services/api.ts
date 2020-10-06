import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.pipefy.com/public_api',
});

export default api;
