import React from 'react';
import styles from '../styles/GridItem.module.css';
import { v4 as uuidv4 } from 'uuid';
export default function GridItem(props) {
  return (function (){
    if (props.header) {
        return <div key={uuidv4()} className={`${styles['grid-item-header']} ${styles['item']}`}>{props.value}</div>;
    }
    else{
        return <div key={uuidv4()} className={`${styles['grid-item']} ${styles['item']}`}>{props.value}</div>;  
    }
  }(this));
}
