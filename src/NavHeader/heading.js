import './heading.css';
import logo from './popcorn.png';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Heading() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className='heading-area'>
        <div onClick={() => {navigate('/home')}} className='brand'>
          <img src={logo} alt=''></img>
          <h1>BingeTracker</h1>
        </div>
        <div className='hamburger-menu'>
            <a href='#' className='hamburger-icon' onClick={() => setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu style={{color: "#ffffff"}}/>
            </a>
        </div>
        <div className={menuOpen ? 'menu mobile-menu' : 'menu'}>
          <ul>
            <li>
              <NavLink to='/home'>Trending</NavLink>
            </li>
            <li>
              <NavLink to='/explore'>Explore</NavLink>
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