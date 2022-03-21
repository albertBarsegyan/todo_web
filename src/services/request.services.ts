import axios from '../services/config.services';

export const postRequest = (endpoint: string, data?: any, headers?: any) => {
  return axios.post(endpoint, data, {
    headers: {
      ...headers,
    },
  });
};

export const getRequest = (endpoint: string, headers?: any) => {
  return axios.get(endpoint, {
    headers: {
      ...headers,
    },
  });
};

export const patchRequest = (endpoint: string, data?: any, headers?: any) => {
  return axios.patch(endpoint, data, { headers });
};

export const deleteRequest = (endpoint: string, data?: any, headers?: any) => {
  return axios.delete(endpoint, {
    data,
    headers,
  });
};
