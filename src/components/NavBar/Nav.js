import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: '#ff3363',
};
export default function Nav() {
  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <li>
          <NavLink to='/' className='nav-link' activeStyle={activeStyle} exact>
            Popular Routes
          </NavLink>
        </li>
        <li>
          <NavLink to='/battle' className='nav-link' activeStyle={activeStyle}>
            King of MP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
