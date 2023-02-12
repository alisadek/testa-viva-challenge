import React from 'react';
import styles from './Card.module.scss';

type Props = {};

const Card = (props: React.PropsWithChildren<Props>) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
