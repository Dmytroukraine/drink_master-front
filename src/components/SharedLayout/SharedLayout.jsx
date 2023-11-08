import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Loading } from 'components/Loader/Loader';
import styles from './SharedLayout.module.css';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <div className={styles.mainc}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Loading size={100} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
