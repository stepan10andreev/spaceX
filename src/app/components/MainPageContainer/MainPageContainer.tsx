import React, { FC } from 'react';
import styles from './mainpagecontainer.css';

interface IMainPageContainer {
  children?: React.ReactNode;
}

export const MainPageContainer: FC<IMainPageContainer> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
