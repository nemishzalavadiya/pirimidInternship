import styles from "../../styles/Grid.module.css";
import GridItem from "./GridItem";
import { v4 as uuidv4 } from "uuid";
export default function Grid(props) {
  //dynamic style
  const style = (param) => {
    return { gridTemplateColumns: `repeat(${param}, 1fr)` };
  };
  //header and data divider
  let header;
  let data;
  let col_length = props.data[0].length;
  if (props.header) {
    header = props.data[0];
    props.data.shift();
    data = props.data;
  } else {
    data = props.data;
  }

  return (
    <div className={styles["grid-container"]}>
      {/* Rendering Header */}
      {props.header ? (
        <div
          key={uuidv4()}
          className={styles["grid-header-container"]}
          style={style(col_length)}
        >
          {header.map((headerName) => {
            return <GridItem key={uuidv4()} header={true} value={headerName} />;
          })}
        </div>
      ) : null}
      {/* Rendering Contents */}
      <div key={uuidv4()} className={styles["grid-rows-container"]}>
        {data.map((row) => {
          return (
            <div
              key={uuidv4()}
              className={styles["grid-row-container"]}
              style={style(col_length)}
            >
              {row.map((item) => {
                return <GridItem key={uuidv4()} value={item} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
