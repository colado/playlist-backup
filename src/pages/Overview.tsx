import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/playlist-detail">PlaylistDetail</Link>
      <Link to="/connect">Connect</Link>
    </>
  );;
};

export default Overview;