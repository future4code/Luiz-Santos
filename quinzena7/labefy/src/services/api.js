import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy',
  headers: {
    Authorization: 'luiz-santos-banu',
  },
});

export default api;
