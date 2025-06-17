import React, { useState } from 'react';
import "./NavBar.css";
import logo from '../../../src/assets/logo.png';
import Resume from '../../../src/assets/resume.pdf';
import { Link } from 'react-scroll';
import Menu from '../../assets/menu.png';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuList">Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuList">Projects</Link>
        <Link activeClass="active" to="achievements" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuList">Achievements</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuList">Contact</Link>
      </div>

      <a href={Resume} download="Kaviya_Resume.pdf">
        <button className="btn">Download Resume</button>
      </a>
      <img src={Menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="achievements" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Achievements</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
