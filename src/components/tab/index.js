import React, { Fragment, useEffect, useState } from 'react';
import styles from './Tab.module.scss';

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const {
        props: { tab, children }
      } = element;
      data.push({ tab, children });
    });
    setTabsData(data);
  }, [children]);

  return (
    <Fragment>
      <ul className={styles.tabUl}>
        {tabsData.map(({ tab }, index) => (
          <li className={styles.tabItem} key={index}>
            <p
              className={`${styles.tabLink} ${index === activeTab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}>
              {tab}
            </p>
          </li>
        ))}
      </ul>
      <div className={styles.tabContent}>{tabsData[activeTab] && tabsData[activeTab].children}</div>
    </Fragment>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
