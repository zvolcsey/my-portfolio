import { FC, ReactNode } from 'react';
import { NavLink, To } from 'react-router-dom';

import styles from './NavItem.module.css';

const NavItem: FC<{ to: To; children: ReactNode }> = (props) => {
  const { to, children } = props;

  return (
    <li className={styles.item}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
