import { FC } from 'react';

import styles from './Footer.module.css';

const Footer: FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;
