import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(url, { signal });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setData(data.users);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        setError(true);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (url && url.trim() !== "" && query !== null) {
      getData();
    }

    return () => {
      abortController.abort();
    };
  }, [url, query]);

  return { data, loading, error };
}

export default useFetch;
