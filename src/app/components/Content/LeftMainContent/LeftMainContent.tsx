import React, { FC } from 'react';
import styles from './leftmaincontent.css';
import { motion } from 'framer-motion';

export const LeftMainContent: FC = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, x: -600}}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6}}
    >
      <h2 className={styles.title}>
        <p className={styles.subtitle}>Путешествие</p>
        <span>на красную планету</span>
      </h2>
      <div className={styles.btnWrapper}>
        <button className={styles.button}>Начать путешествие</button>
        <div className={`${styles.corner} ${styles.secondCorner}`}></div>
        <div className={`${styles.corner} ${styles.forthCorner}`}></div>
      </div>
    </motion.div>
  );
}
