import GridContainer from "./grid/GridContainer";
export default function Home() {
  // Watchlist
  let HeaderName = ["", "", "Open", "Close", "market"];
  let Data = [
    [
      "ICICI Prudential Bluechip Fund Direct Plan Growth",
      "Stock",
      166,
      189,
      200,
    ],
    ["HDFC Corporation Fund Planing", "Stock", 166, 189, 200],
    ["State Bank Of India Mutual Fund", "Stock", 166, 189, 200],
    ["Municipal Corporation", "Stock", 166, 189, 200],
    ["TCS", "Stock", 166, 189, 200],
    ["Infosys", "Stock", 166, 189, 200],
    ["Tata", "Stock", 166, 189, 200],
    ["Google", "Stock", 166, 189, 200],
    ["Tesla", "Stock", 166, 189, 200],
    ["Oracle", "Stock", 166, 189, 200],
    ["Microsoft", "Stock", 166, 189, 200],
  ];
  // Position
  let HeaderNamePosition = ["", "", "Price", "Volume"];
  let DataPosition = [
    [
      "ICICI Prudential Bluechip Fund Direct Plan Growth",
      "Stock",
      166,
      "189,200",
    ],
    ["HDFC Corporation Fund Planing", "Stock", 166, "189,200"],
    ["State Bank Of India Mutual Fund", "Stock", 166, "189,200"],
    ["Municipal Corporation", "Stock", 166, "189,200"],
    ["TCS", "Stock", 166, "189,200"],
    ["Infosys", "Stock", 166, "189,200"],
    ["Tata", "Stock", 166, "109,090"],
    ["Google", "Stock", 166, "109,090"],
    ["Tesla", "Stock", 166, "109,090"],
    ["Oracle", "Stock", 166, "109,090"],
    ["Microsoft", "Stock", 166, "109,090"],
  ];
  return (
    <>
      <div style={{ backgroundColor: "black", overflow: "scroll",display:"flex",flexDirection:"row" }}>
        <div className="sideBar" style={{width:'100vh',height:'100vh',color:'white '}}></div>
        <div>
          <GridContainer
            data={Data}
            headerNames={HeaderName}
            title={"Watchlist"}
          />
          <GridContainer
            data={DataPosition}
            headerNames={HeaderNamePosition}
            title={"Position"}
          />
        </div>
        <div className="sideBar" style={{width:'100vh',height:'100vh',color:'white '}}></div>
      </div>
    </>
  );
}
