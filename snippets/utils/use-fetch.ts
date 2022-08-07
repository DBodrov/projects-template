import {useCallback, useRef, useEffect} from 'react';

function useAbortController() {
  const abortControllerRef = useRef<AbortController>();
  const getAbortController = useCallback(() => {
    if (!abortControllerRef.current) {
      abortControllerRef.current = new AbortController();
    }
    return abortControllerRef.current;
  }, []);

  useEffect(() => () => getAbortController().abort(), [getAbortController]);

  const getSignal = useCallback(() => getAbortController().signal, [getAbortController]);

  return getSignal;
}

interface IFetchRequestConfig extends RequestInit {
  body?: any;
}

export function useFetch() {
  const getSignal = useAbortController();

  const fetchClient = useCallback(
    async (endpoint: string, fetchConfig: IFetchRequestConfig = {}) => {
      const {body, ...customConfig} = fetchConfig;
      const config: RequestInit = {
        method: body ? 'POST' : 'GET',
        headers: {'Content-Type': 'application/json'},
        ...customConfig,
        signal: process.env.NODE_ENV === 'test' ? undefined : getSignal(),
      };
      if (body) {
        config.body = JSON.stringify(body);
      }
      const response = await fetch(endpoint, config);
      if (!response.ok) {
        try {
          const data = await response.json();
          const errorState = {status: response.status, message: response.statusText, ...data};
          return Promise.reject(errorState);
        } catch (error) {
          return Promise.reject({status: response.status, message: response.statusText});
        }
      }
      const data = await response.json();
      return data;
    },
    [getSignal],
  );

  return fetchClient;
}
