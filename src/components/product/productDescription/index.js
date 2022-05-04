import React from 'react';
import styles from './ProductDescription.module.scss';

// eslint-disable-next-line react/display-name
const ProductDescription = React.forwardRef((props, ref) => {
  return (
    <textarea
      className={styles.inputDescription}
      ref={ref}
      defaultValue={props.text || 'Enter your text here...'}
      id="textArea"
    />
  );
});

export default ProductDescription;
