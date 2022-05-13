import { FC } from 'react';
import Brand from '../Brand/Brand';
import NavItem from '../Navigations/NavItem';

import styles from './Header.module.css';

const Header: FC<{}> = () => {
  return (
    <header className={styles.header}>
      <Brand className={styles.brand} />
      <nav className={styles['main-nav']}>
        <ul className={styles['nav-list']}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/projects'>My Projects</NavItem>
          <NavItem to='/about'>About Me</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
