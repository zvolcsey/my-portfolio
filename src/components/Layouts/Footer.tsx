import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.css';
import Brand from '../Brand/Brand';
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer: FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <Brand className={styles.brand} />
      <ul className={styles.items}>
        <li className={styles.item}>
          <a
            href='https://www.linkedin.com/in/zvolcsey'
            className={styles.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li className={styles.item}>
          <a
            href='https://github.com/zvolcsey'
            className={styles.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        <li className={styles.item}>
          <a
            href='https://codepen.io/zoltanv'
            className={styles.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            <FontAwesomeIcon icon={faCodepen} /> CodePen
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
