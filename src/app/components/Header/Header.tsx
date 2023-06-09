import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { Container } from '../ui-components/Container';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
}

export function Header() {
  return (
    <header className={styles.header}>
      <Container stylesObj={containerStyles}>
        <Logo />
        <nav>Nav</nav>
      </Container>
    </header>
  );
}