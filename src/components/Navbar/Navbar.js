import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {Link} from 'react-router-dom'; 
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  return (
    <ResponsiveMenu
        menuOpenButton={<div className='menu-icons-bars'><FaBars/></div>}
        menuCloseButton={<div className='menu-icons-close'><FaTimes className='closeIcon'/></div>}
        changeMenuOn="600px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
        <div className='mainmenu'>
            <ul>
                <li><Link to="/">Websites</Link></li>
                <li><Link to="/branding">Branding</Link></li>
                <li><Link to="/socialmedia">Social Media</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/mobileapps">Mobile Apps</Link></li>
            </ul>
        </div>
        }
    /> 
  )
}

export default Navbar