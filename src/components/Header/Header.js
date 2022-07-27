import React from 'react';
import './Header.css';
import Logo from '../../images/RYH-New-logo.webp';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <div className='header' id="header">
        <div className='container'>
            <div className='row'>
                <div className='col-md-5 col-lg-5 nav-colmn'>
                    <Navbar/>
                </div>
                <div className='col-md-2 col-lg-2'>
                    <div className='Logo'>
                        <div>
                            <Link to="/">
                               <img src={Logo} alt="Logo"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-lg-5 icons-list'>
                    <div className='social-icons'>
                        <ul>
                            <li><a href="https://www.facebook.com/rankuhigher2020" target="_blank"><BsFacebook className='icons'/></a></li>
                            <li><a href="https://twitter.com/Ranku_higher" target="_blank"><BsTwitter className='icons'/></a></li>
                            <li><a href="https://www.instagram.com/ranku_higher/" target="_blank"><BsInstagram className='icons'/></a></li>
                            <li><a href="https://www.linkedin.com/company/ranku-higher/" target="_blank"><BsLinkedin className='icons'/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header