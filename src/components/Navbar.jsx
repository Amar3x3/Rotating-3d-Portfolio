import React, { Component,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = (link) => {
    handleMenuToggle();
  };
  const location = useLocation();

  return (
    <>
    {console.log(location)}
    <nav className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
      <div className="">
        <div className="nav_container">
          <div className="logo">
            {/* <img src={require('../images/logo.png')} className="logo" alt="" /> */}
          </div>
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="links">
        <ul>
          <li className="nav_item">
            <Link to="/" className={location.pathname === '/' ? 'active_nav' : ''} onClick={() => handleLinkClick('home')}>Home</Link>
          </li>
          <li className="nav_item">
            <Link to="/projects" className={location.pathname === '/projects' ? 'active_nav' : ''} onClick={() => handleLinkClick('projects')}>Projects</Link>
          </li>
          <li className="nav_item">
            <Link to="/exp" className={location.pathname === '/exp' ? 'active_nav' : ''} onClick={() => handleLinkClick('exp')}>experience </Link>
          </li>
          <li className="nav_item">
            <Link to="/achievements" className={location.pathname === '/achievements' ? 'active_nav' : ''} onClick={() => handleLinkClick('achievements')}>achievements </Link>
          </li>

          
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;