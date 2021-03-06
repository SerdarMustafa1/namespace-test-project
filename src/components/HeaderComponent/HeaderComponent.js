import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderStyles.scss';
import { ReactComponent as Logo } from '../../assets/namespace-logo.png';

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/shop" className="option">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
