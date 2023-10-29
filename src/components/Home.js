import { NavLink } from 'react-router-dom';

const Home = ({ data, location }) => {
  return (
    <>
      {data?.map(({ id, title }) => (
        <NavLink key={id} state={location} to={`${id}`}>
          <p>{title}</p>
        </NavLink>
      ))}
    </>
  );
};
export default Home;
