import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="tools-nav">
      <NavLink  exact to="/">Box-shadow</NavLink>
      <NavLink to="/border-radius">Border-radius</NavLink>
      <NavLink to="/triangle-generator">Triangle generator</NavLink>
    </nav>
  )
}

export default Header;