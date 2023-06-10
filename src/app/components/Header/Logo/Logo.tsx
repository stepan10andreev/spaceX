import React, { FC } from 'react';
import styles from './logo.css';
import image from '../../../../assets/img/logo-spaceX.png'
import { motion } from 'framer-motion';

export const Logo: FC = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: -200}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7}}
    >
      <a href='#' className={styles.link}>
        <img className={styles.image} src={image} alt="SpaceX Logo" />
      </a>
      <div className={`${styles.corner} ${styles.firstCorner}`}></div>
      <div className={`${styles.corner} ${styles.secondCorner}`}></div>
      <div className={`${styles.corner} ${styles.thirdCorner}`}></div>
      <div className={`${styles.corner} ${styles.forthCorner}`}></div>
    </motion.div>
  );
}
