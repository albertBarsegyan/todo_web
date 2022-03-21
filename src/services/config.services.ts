import { getDataFromStorage } from './../helpers/storage.helpers';
import { localStorageKeys } from './../constants/localStorage.constants';

import axios from 'axios';

const isDevelopmentMode = process.env?.NODE_ENV === 'development';

axios.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

axios.defaults.baseURL = isDevelopmentMode
  ? 'http://localhost:7000'
  : process.env?.BASE_URL;

axios.defaults.headers.common = {
  Authorization: `Bearer ${getDataFromStorage(localStorageKeys.userToken)}`,
};

export default axios;
