import React, { CSSProperties, FC } from 'react';
import styles from './container.css';

type IClassObject = CSSProperties

interface IContainer {
  children?: React.ReactNode;
  stylesObj?: IClassObject
}

export const Container: FC<IContainer> = ({ children, stylesObj }) => {
  return (
    <div className={styles.container} style={stylesObj && stylesObj}>
      {children}
    </div>
  );
}
