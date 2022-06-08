import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './HomePage.module.css';
import Badge from '../components/Badge/Badge';

const HomePage: FC<{}> = () => {
  useEffect(() => {
    document.title = 'Home | Zoltán Völcsey';
  }, []);
  return (
    <div className={styles['home-page']}>
      <div className={styles.container}>
        <Badge>Full Stack Web Developer</Badge>
        <div className={styles['hero-text']}>
          <p>
            <span>From</span> Client Side
          </p>
          <p>
            <span>To</span> 'under the hood'
          </p>
        </div>
        <ul className={styles.actions}>
          <li className={styles.item}>
            <Link to='/projects' className={`${styles.link} ${styles.primary}`}>
              <FontAwesomeIcon icon={faEye} /> See my projects
            </Link>
          </li>
          <li className={styles.item}>
            <Link to='/about' className={`${styles.link} ${styles.secondary}`}>
              Who am I? <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
