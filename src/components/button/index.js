import React from 'react';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';
import styles from './Button.module.scss';

const Button = (props) => {
  const { type, className, label, onClick, onChange } = props;
  const styleButton = {};
  const classes = MapPropsToStyles(styles, className);

  return (
    <button
      type={type || 'text'}
      style={styleButton}
      onClick={onClick}
      onChange={onChange}
      className={`${styles.button} ${classes}`}>
      <h6>{label || 'Button'}</h6>
    </button>
  );
};

export default Button;
