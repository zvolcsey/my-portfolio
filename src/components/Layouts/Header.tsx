import { FC } from 'react';
import Brand from '../Brand/Brand';
import NavItem from '../Navigations/NavItem';

import styles from './Header.module.css';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Header: FC<Record<string, never>> = () => {
  return (
    <header className={styles.header}>
      <Brand className={styles.brand} />
      <div className={styles.container}>
        <nav className={styles['main-nav']}>
          <ul className={styles['nav-list']}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/projects">My Projects</NavItem>
            <NavItem to="/about">About Me</NavItem>
          </ul>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
