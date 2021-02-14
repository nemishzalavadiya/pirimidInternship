export default function dataFormatter(data) {
  let TradeHistory = [];
  let head = [];
  function getKeys(data) {
    let keys = [];
    Object.keys(data).map((key) => keys.push(key));
    return keys;
  }
  getKeys(data["data"][0]).forEach((header) => head.push(header));
  TradeHistory.push(head);
  data["data"].map((row) => {
    let values = [];
    getKeys(row).map((key) => values.push(row[key]));
    TradeHistory.push(values);
  });
  return TradeHistory;
}
