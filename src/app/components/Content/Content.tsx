import React, { FC, ReactNode } from 'react';
import styles from './content.css';

interface IContent {
  children?: ReactNode;
}

export const Content: FC<IContent> = ({ children }) =>  {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
