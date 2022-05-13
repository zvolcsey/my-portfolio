import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC<{}> = () => {
  return (
    <>
      {/*Header*/}
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      {/*Footer*/}
    </>
  );
};

export default Layout;
