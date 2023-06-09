import React, { FC } from 'react';
import styles from './infocard.css';

interface IInfoCard {
  text1: string;
  text2: string;
  text3: string;
}

export const InfoCard: FC<IInfoCard> = ({text1, text2, text3}) => {

  return (
    <article className={styles.card}>
        <h3 className={styles.title}>
          {text1}
          <div className={styles.highlight}>{text2}</div>
          {text3}
        </h3>
    </article>
  );
}
