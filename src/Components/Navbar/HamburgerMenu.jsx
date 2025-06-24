import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ className = '', onClick}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
    if (onClick) onClick(e);
  };

  return (
    <div
      className={`wrapper-menu ${isOpen ? 'open' : ''} ${className}`} 
      onClick={toggleMenu}
    >
      <div className="line-menu half start"></div>
      <div className="line-menu"></div>
      <div className="line-menu half end"></div>
    </div>
  );
};

export default HamburgerMenu;
