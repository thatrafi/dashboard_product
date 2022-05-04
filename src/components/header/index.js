import React from 'react';
import styles from './Header.module.scss';
import logo from 'images/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  );
};

export default Header;
