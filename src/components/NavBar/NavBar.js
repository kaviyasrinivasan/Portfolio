import React, { useState } from 'react';
import "./NavBar.css";
import logo from '../../../src/assets/logo.png';
import Resume from '../../../src/assets/resume.pdf';
import {Link} from 'react-scroll';
import Menu from '../../assets/menu.png';
const NavBar = () => {

  const [showMenu,setShowMenu]=useState(false);

  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div class="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} class="desktopMenuList">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} class="desktopMenuList">Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} class="desktopMenuList">Projects</Link>
            <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-50} duration={500} class="desktopMenuList">Achievements</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} class="desktopMenuList">Contact</Link>
        </div>
        <a href={Resume} download="Kaviya_Resume.pdf"> <button className="btn">Download Resume</button> </a>
        <img src={Menu} alt="menu" className='mobMenu'/>
        <div class="navMenu" style={{display : showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} class="listItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} class="listItem" onClick={()=>setShowMenu(!showMenu)}>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} class="listItem" onClick={()=>setShowMenu(!showMenu)}>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} class="listItem" onClick={()=>setShowMenu(!showMenu)}>Client</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} class="listItem" onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar;