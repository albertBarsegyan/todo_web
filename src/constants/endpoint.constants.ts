const isDevelopmentMode = process.env?.NODE_ENV === 'development';

export const Endpoints = {
  baseUrl: (...paths: string[]) => {
    const pathsJoined = paths.join('/');

    return isDevelopmentMode
      ? `http://localhost:7000/${pathsJoined}`
      : `${process.env?.BASE_URL}/${pathsJoined}`;
  },
};
