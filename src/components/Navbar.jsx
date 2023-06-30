import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const showFlashbackButton = location.pathname !== '/Cryptopanel/';
  const currencyName = useSelector((state) => state.CurrencyDetails.CurrencyDetails?.name);
  const pageTitle = location.pathname === '/Cryptopanel/' ? 'Currencies' : currencyName;

  return (
    <nav className="navbar">
      {showFlashbackButton && (
        <div className="navbar-left">
          <Link to="/Cryptopanel/" className="navbar-flashback">
            Back
          </Link>
        </div>
      )}
      <div className="navbar-title-container">
        <div className="navbar-title"><h2>{pageTitle}</h2></div>
      </div>
    </nav>
  );
};

export default Navbar;
