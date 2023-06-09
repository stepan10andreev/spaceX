import React, { FC } from 'react';
import styles from './layout.css';
import { Header } from '../Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
