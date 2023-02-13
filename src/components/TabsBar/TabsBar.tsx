import React, { useEffect, useState } from 'react';
import styles from './TabsBar.module.scss';
import logo from '../../assets/icon-logo.png';
import { getDocuments } from '../../api/apis';

type Tab = { id: number; title: string };
type Props = { tabs: Tab[]; initialSelection?: number; onChange: (selection: number) => void };

const TabsBar = (props: Props) => {
  const [selected, setSelected] = useState<number>(props.initialSelection || 1);
  const { tabs } = props;
  return (
    <div className={styles.bar}>
      <div className={styles.buttonsGroup}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tab}  ${tab.id === selected ? styles.selected : ''}`}
            onClick={() => {
              setSelected(tab.id);
              props.onChange(tab.id);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
};

export default TabsBar;
