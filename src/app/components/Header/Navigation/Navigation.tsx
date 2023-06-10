import React, { FC, useContext, useRef } from 'react';
import styles from './navigation.css';
import { NavLink } from 'react-router-dom';
import { menuContext } from '../../../context/navContext';
import classNames from 'classnames';
import { useOnClickOutside } from '../../Hooks/useOnClickOutside';

const navList = [
  {title: 'Главная', pathName: '/', id: '1'},
  {title: 'Технология', pathName: '/technology', id: '2'},
  {title: 'График полетов', pathName: '/flight-schedule', id: '3'},
  {title: 'Гарантии', pathName: '/guarantees', id: '4'},
  {title: 'О компании', pathName: '/about', id: '5'},
  {title: 'Контакты', pathName: '/contacts', id: '6'},
]

export const Navigation: FC = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(menuContext);

  const ref = useRef<HTMLElement>(null);

  useOnClickOutside(ref, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <nav
      ref={ref}
      className={classNames(
      styles.nav,
      {[styles.active]: isMenuOpen},
    )}>
      {navList.map(({id, pathName, title}) => (
        <NavLink key={id} to={pathName} className={({isActive}) => isActive ? styles.linkActive : styles.settingsLink}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}
