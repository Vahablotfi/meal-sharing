import React, { useEffect, useState } from "react";



const useFetch = (url) => {
  const [data, setData] = useState([]);

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
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log(error.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data };
};
export default useFetch;




