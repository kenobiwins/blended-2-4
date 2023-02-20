import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const Layout = () => {
  const { userId } = useParams();

  return (
    <>
      <header>{!userId && <Navigation />}</header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
