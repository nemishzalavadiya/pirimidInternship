import React from 'react';
import styles from '../styles/GridItem.module.css';
export default function GridItem(props) {
  return (function (){
    if (props.header) {
        return <div key={props.value+new Date().getTime()} className={`${styles['grid-item-header']} ${styles['item']}`}>{props.value}</div>;
    }
    else{
        return <div key={props.value+new Date().getTime()} className={`${styles['grid-item']} ${styles['item']}`}>{props.value}</div>;  
    }
  }(this));
}
