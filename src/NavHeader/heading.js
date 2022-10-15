import './heading.css';
import { NavLink } from 'react-router-dom';

function Heading() {
  return (
    <div className='heading-area'>
      <div className='brand'>
        <h1>Entertainment Tracker</h1>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <NavLink to='/'>Trending Now</NavLink>
          </li>
          <li>
            <NavLink to='/watchlist'>My Watchlist</NavLink>
          </li>
          <li>
            <NavLink to='/discussion'>Discussion</NavLink>
          </li>
          <li>
            <NavLink to='/profile'>My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Heading;