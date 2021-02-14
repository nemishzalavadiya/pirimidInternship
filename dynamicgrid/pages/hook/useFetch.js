import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isComplete, setCompleted] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchUrl(Url) {
    try {
      const response = await fetch(Url);
      const json = await response.json();
      await sleep(3000); // to see loading effect
      setData(json);
      setCompleted(true);
    } catch (error) {
      //handle errors here
    }
  }
  useEffect(() => {
    fetchUrl(url);
  }, []);
  return [data, isComplete];
}
export { useFetch };
