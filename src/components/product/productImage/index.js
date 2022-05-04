import styles from './ProductImage.module.scss';

const ProductImage = (props) => {
  return (
    <img
      className={styles.imgProduct}
      src={props.src || 'https://img.innoloft.com/products/product_783016a3.png'}
      alt={props.name}
    />
  );
};

export default ProductImage;
