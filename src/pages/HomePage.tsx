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
    <section className={styles['home-page']}>
      <div className={styles.container}>
        <Badge className={styles.badge}>Full Stack Web Developer</Badge>
        <div className={styles['hero-text-container']}>
          <p className={styles['hero-text']}>
            <span>From</span> Client Side
          </p>
          <p className={styles['hero-text']}>
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
    </section>
  );
};

export default HomePage;
