import { MapPropsToStyles } from 'helper/MapPropsToStyles';
import React from 'react';
import styles from './Row.module.scss';

const Row = (props) => {
  const classes = MapPropsToStyles(styles, props.className);
  return <div className={`${styles.row} ${classes}`}>{props.children}</div>;
};

export default Row;
