import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo1.png';

// this component returns our navbar ultimately //

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <NavLink to='/'>
          <img src={logo} alt='' width='130px' />
        </NavLink>
      </div>

      <div className='nav-links'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'activenav' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/MyQuizzes'
              className={({ isActive }) => (isActive ? 'activenav' : '')}
            >
              My Quizzes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
