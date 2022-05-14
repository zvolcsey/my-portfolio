import { FC } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './HomePage.module.css';

const HomePage: FC<{}> = () => {
  return (
    <div className={styles['home-page']}>
      <div className={styles.container}>
        <span className={styles.badge}>Full Stack Developer</span>
        <div className={styles['hero-text']}>
          <p>
            <span>From</span> Client
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
              Who I am? <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
