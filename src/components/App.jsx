import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import tabsData from './db/tabs.json';
import { lazy, useEffect, useMemo, useState } from 'react';
const Home = lazy(() => import('./Home'));
const Layout = lazy(() => import('./Layout'));
const DummyTable = lazy(() => import('./dummyTable'));
export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    setData(tabsData);
  }, []);

  const dataSorted = useMemo(() => {
    return data?.toSorted((a, b) => a.order - b.order);
  }, [data]);

  const pathNavigate = dataSorted?.[0].id;
  console.log(dataSorted);
  useEffect(() => {
    if (location.key === 'default') {
      navigate(pathNavigate);
    }
  }, [dataSorted, location.key, navigate, pathNavigate]);

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
        <Route path="/" element={<Layout />}>
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
