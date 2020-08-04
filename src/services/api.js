import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trellozera.herokuapp.com/',
});

export default api;
