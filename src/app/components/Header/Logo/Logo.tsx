import React, { FC } from 'react';
import styles from './logo.css';
import image from '../../../../assets/img/logo-spaceX.png'

export const Logo: FC = () => {
  return (
    <a href='#' className={styles.link}>
      <img src={image} alt="SpaceX Logo" />
    </a>
  );
}
