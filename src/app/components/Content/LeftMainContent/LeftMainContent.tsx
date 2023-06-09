import React, { FC } from 'react';
import styles from './leftmaincontent.css';

export const LeftMainContent: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <p className={styles.subtitle}>Путешествие</p>
        <span>на красную планету</span>
      </h2>
      <div className={styles.btnWrapper}>
        <button className={styles.button}>Начать путешествие</button>
        <div className={`${styles.corner} ${styles.secondCorner}`}></div>
        <div className={`${styles.corner} ${styles.forthCorner}`}></div>
      </div>
    </div>
  );
}
