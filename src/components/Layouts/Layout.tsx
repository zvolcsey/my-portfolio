import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Loading from '../UI/Loading';

const Layout: FC<{}> = () => {
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
};

export default Layout;
