import React, { FC, PropsWithChildren } from 'react';
import styles from './layout.css';
import { Header } from '../Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
