import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styles from './not-found.module.css';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.notFoundText}>This page is not found.</p>
        <div className={styles.actions}>
          <Link to="/" className={`${styles.link} ${styles.primary}`}>
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
