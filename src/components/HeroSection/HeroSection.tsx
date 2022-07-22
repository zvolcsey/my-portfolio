import { FC } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './HeroSection.module.css';
import Badge from '../Badge/Badge';

const HeroSection: FC<{}> = () => {
  return (
    <section className={styles['hero-section']}>
      <Badge className={styles.badge}>Full Stack Web Developer</Badge>
      <h1 className={`${styles['hero-text']} ${styles.title}`}>
        <span className={styles.block}>Build</span> beautiful and secure
        <span
          className={`${styles.block} ${styles.highlight} ${styles.rotate}`}
        >
          web apps
        </span>
      </h1>
      <h2 className={`${styles['hero-text']} ${styles.subtitle}`}>
        with maintainable code
      </h2>
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
    </section>
  );
};

export default HeroSection;
