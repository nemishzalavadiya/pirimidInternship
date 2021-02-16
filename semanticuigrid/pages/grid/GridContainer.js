export default function GridContainer(props) {

    function conditionalDisplay(item){
        if(Number.isInteger(item)){
            return <i className="rupee sign icon small"></i>;
        }
    }

  return (
      <>
    <div className="ui equal width grid" style={{margin:'100px 200px 100px 200px'}}>
    <div className="ui horizontal divider" style={{color:'#fff'}}>{props.title}</div>
      {props.data.map((row) => {
        return (
          <div className="ui row segment" style={{height:'20vh',padding:'5vh 2vh 5vh 2vh',backgroundColor:'rgb(33, 33, 33)',color:'#fff',cursor:'pointer'}}>
            {row.map((item,index) => (
                index!=0?           
                 <div className="ui right floated column"><div style={{fontSize:'x-small'}}>{props.headerNames[index]}</div>{item}{" "}{conditionalDisplay(item)}  </div>
                :<div className={`six wide column`}>{item}</div>
            ))}
          </div>
        );
      })}
    </div>
    </>
  );
}
