import { useEffect, useState } from 'react';

import api from '../services/api';

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
