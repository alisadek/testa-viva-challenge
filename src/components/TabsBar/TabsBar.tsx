import React from 'react';
import styles from './TabsBar.module.scss';
import logo from '../../assets/icon-logo.png';

type Props = {};

const TabsBar = (props: Props) => {
  return (
    <div className={styles.bar}>
      <div className={styles.buttonsGroup}>
        <button className={styles.tab}>Dokument 1</button>
        <button className={`${styles.tab} ${styles.selected}`}>Dokument 2</button>
        <button className={styles.tab}>Dokument 3</button>
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
};

export default TabsBar;
