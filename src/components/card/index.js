import React from 'react';
import styles from './Card.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const Card = (props) => {
  const classes = MapPropsToStyles(styles, props.className);

  return (
    <div className={`${styles.card} ${classes}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
