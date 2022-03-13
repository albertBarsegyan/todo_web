export const postData = (endpoint: string, data: any, headers?: any) => {
  return fetch(endpoint, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
    method: 'POST',
    body: JSON.stringify(data),
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    }
    return res;
  });
};

export const deleteData = (endpoint: string, data: any, headers?: any) => {
  return fetch(endpoint, {
    headers,
    method: 'DELETE',
    body: JSON.stringify(data),
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    }
    return res;
  });
};
