import React from 'react';
import './Header.css';
import Logo from '../../images/RYH-New-logo.webp';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header' id="header">
        <div className='container'>
            <div className='row'>
                <div className='col col-md-5 col-lg-5 nav-colmn'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/">
                                       Websites
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/designs">
                                        <a>Designs</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/socialmedia">
                                       <a>Social Media</a>
                                    </Link> 
                                </li>
                                <li className="nav-item">
                                    <Link to="/videos">
                                       <a>Videos</a>
                                    </Link> 
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='col col-md-2 col-lg-2'>
                    <div className='Logo'>
                        <div>
                        <img src={Logo} alt="Logo"/>
                        </div>
                    </div>
                </div>
                <div className='col col-md-5 col-lg-5 icons-list'>
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