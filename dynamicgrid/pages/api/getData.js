import dataFormatter from "../util/dataFormatter";

export default function getData(Url) {
  
  async function fetchData(Url) {
    const response = await fetch(Url);
    const json = await response.json();
    json = dataFormatter(json);
    return json;
  }
  return fetchData(Url);
}
