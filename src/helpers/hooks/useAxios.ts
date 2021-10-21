import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useDeepCompareMemoize } from "./useDeepCompareMemoize";

import http from "../../http-common";

export function useAxios<T>(axiosConfig: AxiosRequestConfig): {
  response: AxiosResponse<T> | null;
  error: string;
  loading: boolean;
} {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);

  const memoisedConfig = useDeepCompareMemoize(axiosConfig);

  useEffect(() => {
    setLoading(true);
    // Using unmounted flag for avoiding
    // state update on an unmounted component
    let unmounted = false;
    const source = axios.CancelToken.source();
    const fetchData = async (config: AxiosRequestConfig) => {
      try {
        const result: AxiosResponse<T> = await http.request({
          ...config,
          cancelToken: source.token,
        });
        if (!unmounted) setResponse(result);
      } catch (apiError: any) {
        if (!unmounted) setError(apiError.message);
      } finally {
        if (!unmounted) setLoading(false);
      }
    };

    fetchData(memoisedConfig);

    return () => {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  }, [memoisedConfig]);

  return { response, error, loading };
}
