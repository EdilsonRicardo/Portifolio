import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="nome" className='botao-nav' smooth={true} duration={500}>
        <p>HOME</p>
      </Link>
      <Link to="about" className='botao-nav' smooth={true} duration={500}>
        <p>ABOUT</p>
      </Link>
      <Link to="skills" className='botao-nav' smooth={true} duration={500}>
        <p>SKILLS</p>
      </Link>
      <Link to="portfolio" className='botao-nav' smooth={true} duration={500}>
        <p>PORTFOLIO</p>
      </Link>
      <Link to="contact" className='botao-nav' smooth={true} duration={500}>
        <p>CONTACT</p>
      </Link>
    </div>
  );
};

export default Navbar;
