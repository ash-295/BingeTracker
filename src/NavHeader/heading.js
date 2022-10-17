import './heading.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

function Heading() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='heading-area'>
        <div className='brand'>
          <h1>Entertainment Tracker</h1>
        </div>
        <div className='hamburger-menu'>
            <a href='#' className='hamburger-icon' onClick={() => setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu style={{color: "#ffffff"}}/>
            </a>
        </div>
        <div className={menuOpen ? 'menu mobile-menu' : 'menu'}>
          <ul>
            <li>
              <NavLink to='/home'>Trending Now</NavLink>
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
    </>
  );
}

export default Heading;