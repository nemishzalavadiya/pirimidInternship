import Loading from "./Loading";
import Grid from "./Grid";
import { useFetch } from './hook/useFetch';
import dataFormatter from "./util/dataFormatter";
export default function Home() {
  const Url =
    "http://api.marketstack.com/v1/intraday?access_key=5be42204cd612e45b35d7b72aa26023f&symbols=AAPL&limit=20&offset=0&sort=DESC";
  const [data, isCompleted] = useFetch(Url);
  console.log("Home, isComplete is : ",isCompleted);
  return isCompleted ? (
    function(){
      let TradeHistory = dataFormatter(data);
      return <Grid header={TradeHistory.header} data={TradeHistory.data} />
    }()
  ) : (
    <Loading />
  );
}
