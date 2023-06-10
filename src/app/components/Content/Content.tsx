import React, { FC, PropsWithChildren } from 'react';
import styles from './content.css';

export const Content: FC<PropsWithChildren> = ({ children }) =>  {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
