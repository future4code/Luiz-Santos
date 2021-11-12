import { useCallback, useState } from 'react';

import api from '../services/api';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (params) => {
    let response;
    try {
      setError(null);
      setIsLoading(true);
      response = await api(params);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log('USEFETCH', error.response.data);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
      return response;
    }
  }, []);

  return {
    data,
    isLoading,
    error,
    request,
  };
};
