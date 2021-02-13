import { React, useState, useEffect } from "react";
import Loading from "./Loading";
import Grid from "./Grid";
import getData from "./api/getData";
export default function Home() {
  const [isComplete, setCompleted] = useState(0);
  const [tradeHistory, setTradeHistory] = useState([]);
  const URL =
    "http://api.marketstack.com/v1/intraday?access_key=5be42204cd612e45b35d7b72aa26023f&symbols=AAPL&limit=20&offset=0&sort=DESC";
  useEffect(() => {
    if (tradeHistory.length == 0) {
      setTradeHistory(getData(URL));
      setCompleted(true);
    }
  }, []);
  if (tradeHistory.length != 0) 
  return isComplete ? (
    <Grid header={tradeHistory.header} date={tradeHistory.data} />
  ) : (
    <Loading />
  );
}
