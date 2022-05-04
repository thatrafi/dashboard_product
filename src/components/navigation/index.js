import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className={styles.NavUl}>
        <li className={styles.NavItem}>
          <NavLink className={(nav) => nav.isActive && styles.active} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink className={(nav) => nav.isActive && styles.active} to="/product">
            Product
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
