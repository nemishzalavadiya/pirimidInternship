import styles from "../styles/Grid.module.css";
import GridItem from "./GridItem";
import { v4 as uuidv4 } from 'uuid';
export default function Grid(props) {
  //dynamic style
  const style = (param) => {
    return { gridTemplateColumns: `repeat(${param}, 1fr)` };
  };
  return (
    <div
      className={styles["grid-container"]}
      style={style(props.header.length)}
    >
      {props.header.map((headerName) => {
        return (
          <GridItem
            key={uuidv4()}
            header={true}
            value={headerName}
          />
        );
      })}
      {props.data.map((row) => {
        return row.map((item,index) => {
          return <GridItem key={uuidv4()} value={item} />;
        });
      })}
    </div>
  );
}
