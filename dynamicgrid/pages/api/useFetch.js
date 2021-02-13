import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isComplete, setCompleted] = useState(false);
  async function fetchUrl(Url) {
    const response = await fetch(Url);
    const json = await response.json();
    setData(json)
    setCompleted(true);
  }
  useEffect(() => {
    fetchUrl(url);
  }, []);
  return [data, isComplete];
}
export { useFetch };