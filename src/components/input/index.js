import React from 'react';
import styles from './Input.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const { type, name, value, placeholder, className, onChange, onClick } = props;
  const classes = MapPropsToStyles(styles, className);

  return (
    <input
      type={type || 'text'}
      name={name}
      defaultValue={value}
      placeholder={placeholder}
      className={`${styles.input} ${classes}`}
      onChange={onChange}
      onClick={onClick}
      ref={ref}
    />
  );
});

export default Input;
