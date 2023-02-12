import React from 'react';
import styles from './ParagraphCard.module.scss';

type Props = {};

const ParagraphCard = (props: React.PropsWithChildren<Props>) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default ParagraphCard;
