import { FC } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './HeroSection.module.css';
import Badge from '../Badge/Badge';

const HeroSection: FC<Record<string, never>> = () => {
  return (
    <section className={styles['hero-section']}>
      <Badge className={styles.badge}>Open-Source Contributor</Badge>
      <h1 className={`${styles['hero-text']} ${styles.title}`}>
        <span className={styles.block}>Building</span> beautiful and secure
        <span className={`${styles.block} ${styles.highlight}`}>web apps</span>
      </h1>
      <h2 className={`${styles['hero-text']} ${styles.subtitle}`}>
        with maintainable code
      </h2>
      <Badge className={styles.badge}>Full Stack Web Developer</Badge>
      <ul className={styles.actions}>
        <li className={styles.item}>
          <Link to="/projects" className={`${styles.link} ${styles.primary}`}>
            <FontAwesomeIcon icon={faEye} /> See my projects
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/about" className={`${styles.link} ${styles.secondary}`}>
            Who am I? <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default HeroSection;
