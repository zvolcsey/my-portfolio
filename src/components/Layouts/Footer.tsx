import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.css';
import Brand from '../Brand/Brand';
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import ExternalLink from '../UI/ExternalLink';

const Footer: FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <Brand className={styles.brand} />
      <ul className={styles.items}>
        <li className={styles.item}>
          <ExternalLink
            href="https://www.linkedin.com/in/zvolcsey"
            className={styles.link}
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </ExternalLink>
        </li>
        <li className={styles.item}>
          <ExternalLink
            href="https://github.com/zvolcsey"
            className={styles.link}
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </ExternalLink>
        </li>
        <li className={styles.item}>
          <ExternalLink
            href="https://codepen.io/zoltanv"
            className={styles.link}
          >
            <FontAwesomeIcon icon={faCodepen} /> CodePen
          </ExternalLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
