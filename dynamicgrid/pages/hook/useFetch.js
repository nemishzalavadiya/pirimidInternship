import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isComplete, setCompleted] = useState(false);
  async function fetchUrl(Url) {
    console.log("fetching will start");
    const response = await fetch(Url);
    const json = await response.json();
    setData(json);
    setCompleted(true);
    console.log("fetchling is over");
  }
  useEffect(() => {
    fetchUrl(url);
  }, []);
  return [data, isComplete];
}
export { useFetch };
