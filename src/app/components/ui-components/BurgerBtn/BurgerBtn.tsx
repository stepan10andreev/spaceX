import React, { useContext } from 'react';
import styles from './burgerbtn.css';
import { menuContext } from '../../../context/navContext';
import classNames from 'classnames';

export const BurgerBtn = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(menuContext);

  const handlerClick = () => {
    toggleMenuMode();
  };

  return (
    <button
      className={classNames(
        styles.button,
        {[styles.active]: isMenuOpen},

      )}
      aria-label="Открыть главное меню"
      onClick={handlerClick}
    >
      <span className={styles.bar}/>
      <span className={styles.bar}/>
      <span className={styles.bar}/>
    </button>
  );
}
// isMenuOpen ? 'active' : ''
