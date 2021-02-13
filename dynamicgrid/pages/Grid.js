import styles from "../styles/Grid.module.css";
import GridItem from "./GridItem";
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
            key={headerName + new Date().getTime()}
            header={true}
            value={headerName}
          />
        );
      })}
      {props.data.map((row) => {
        return row.map((item) => {
          return <GridItem key={item + new Date().getTime()} value={item} />;
        });
      })}
    </div>
  );
}
