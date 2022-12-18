import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styles from './general-error.module.css';
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

export default function GeneralError(props: {status: number, statusText: string}) {
  const { status, statusText } = props;
  return (
    <>
      <Header />
        <main className={styles.main}>
          <h1 className={styles.notFoundTitle}>{status}</h1>
          <p className={styles.notFoundText}>Sorry, something went wrong.</p>
          <p className={styles.notFoundText}>
            <i>{statusText}</i>
          </p>
          <div className={styles.actions}>
            <Link to='/' className={`${styles.link} ${styles.primary}`}>
              <FontAwesomeIcon icon={faArrowLeftLong} /> Back to Home
            </Link>
          </div>
        </main>
      <Footer />
    </>
  )
}