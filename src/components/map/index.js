import React from 'react';
import Card from 'components/card';
import styles from './Map.module.scss';

const Map = (props) => {
  const mapLink = `https://maps.google.com/maps?q=${props.lat || 0.0},${
    props.lng || 0.0
  }&z=15&output=embed`;
  return (
    <Card className="column full">
      <h3>Address</h3>
      <iframe src={mapLink} className={styles.map} />
    </Card>
  );
};

export default Map;
