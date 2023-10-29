import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Tabs</NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
