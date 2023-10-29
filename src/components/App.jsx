import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import tabsData from './db/tabs.json';
import { lazy, useEffect, useMemo } from 'react';
const Home = lazy(() => import('./Home'));
const Layout = lazy(() => import('./Layout'));
const DummyTable = lazy(() => import('./dummyTable'));
export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dataSorted = useMemo(() => {
    return tabsData.toSorted((a, b) => a.order - b.order);
  }, []);

  const pathNavigate = dataSorted?.[0].id;

  useEffect(() => {
    if (location.key === 'default' && location.pathname === '/test-task') {
      navigate(pathNavigate);
    }
  }, [dataSorted, location.key, location.pathname, navigate, pathNavigate]);
  console.log(location);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/test-task" element={<Layout />}>
          <Route
            index
            element={<Home data={dataSorted} location={location} />}
          />
          <Route path=":id" element={<DummyTable />} />
        </Route>
        <Route path="*" element={<div>Error page</div>} />
      </Routes>
    </div>
  );
};
