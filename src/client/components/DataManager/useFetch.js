import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong please try again later!");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoading(false);
          setError(error.message);
          console.log(error.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, error, loading };
};
export default useFetch;
