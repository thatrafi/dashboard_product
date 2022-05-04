import React from 'react';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const setting = useSelector((state) => state.setting.SettingsData);
  return (
    <header className={styles.header}>
      <img src={setting.logo} />
    </header>
  );
};

export default Header;
