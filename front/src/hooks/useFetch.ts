import { useRef, useState } from 'react';

export function useFetch<T, U = {}>(url: string, body: U) {
  const cancelRequest = useRef<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = () => {
    cancelRequest.current = false;
    setLoading(true);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          console.log('This is the error: ', data);
          throw new Error(data.error);
        }

        return data;
      })
      .then((data) => {
        if (cancelRequest.current) return;
        setError(null);
        setData(data);
      })
      .catch((error) => {
        if (cancelRequest.current) return;
        setError(error);
      })
      .finally(() => {
        if (cancelRequest.current) return;
        setLoading(false);
      });

    return () => {
      cancelRequest.current = true;
    };
  };

  return [
    {
      data,
      error,
      loading,
      setData,
      setError,
      setLoading,
    },
    execute,
  ] as const;
}
