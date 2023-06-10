import React, { FC } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { Container } from '../ui-components/Container';
import { Navigation } from './Navigation';
import { BurgerBtn } from '../ui-components/BurgerBtn';
import { MenuContextProvider } from '../../context/navContext';

const containerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
}

export const Header: FC = () => {
  return (
    <MenuContextProvider>
      <header className={styles.header}>
        <Container stylesObj={containerStyles as React.CSSProperties}>
          <BurgerBtn />
          <Logo />
          <Navigation />
        </Container>
      </header>
    </MenuContextProvider>
  );
}
