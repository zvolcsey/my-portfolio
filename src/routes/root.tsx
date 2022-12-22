import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './root.module.css';
import Header from '../components/Layouts/Header';
import Loading from '../components/UI/Loading';
import Footer from '../components/Layouts/Footer';

export default function Root() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
