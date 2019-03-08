import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="tools-nav">
      <NavLink  exact to="/">
        Box-shadow
      </NavLink>
      <NavLink to="/box-radius">
        Box-radius
      </NavLink>
    </nav>
  )
}

export default Header;