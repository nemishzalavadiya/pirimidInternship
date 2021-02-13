export default function dataFormatter(data){
    let TradeHistory = {
        header : [],
        data : []
    }
    function getKeys(data){
        let keys = [];
        Object.keys(data).map((key)=>keys.push(key));
        return keys;
    }

    getKeys(data['data'][0]).forEach((header)=>TradeHistory.header.push(header));
    data['data'].map((row)=>{
        let values=[];
        getKeys(row).map((key)=>values.push(row[key]));
        TradeHistory.data.push(values);
    });
    return TradeHistory;
}