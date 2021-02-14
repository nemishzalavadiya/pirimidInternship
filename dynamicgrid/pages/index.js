import Loading from "./Loader/Loading";
import Grid from "./grid/Grid";
import { useFetch } from "./hook/useFetch";
import dataFormatter from "./util/dataFormatter";
export default function Home() {
  const Url =
    "http://api.marketstack.com/v1/intraday?access_key=5be42204cd612e45b35d7b72aa26023f&symbols=AAPL&limit=100&offset=0&sort=DESC";
  const [data, isCompleted] = useFetch(Url);
  return isCompleted ? (
    (function () {
      let TradeHistory = dataFormatter(data);
      return <Grid header data={TradeHistory} />;
    })()
  ) : (
    <Loading />
  );
}
