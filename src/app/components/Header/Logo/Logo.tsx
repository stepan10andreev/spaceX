import React, { FC } from 'react';
import styles from './logo.css';
import image from '../../../../assets/img/logo-spaceX.png'

export const Logo: FC = () => {
  return (
    <div className={styles.wrapper}>
      <a href='#' className={styles.link}>
        <img className={styles.image} src={image} alt="SpaceX Logo" />
      </a>
      <div className={`${styles.corner} ${styles.firstCorner}`}></div>
      <div className={`${styles.corner} ${styles.secondCorner}`}></div>
      <div className={`${styles.corner} ${styles.thirdCorner}`}></div>
      <div className={`${styles.corner} ${styles.forthCorner}`}></div>
    </div>
  );
}
