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
                                <li className="nav-item active">
                                    <Link to="/designs">
                                        <a>Design</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/websites">
                                       Websites
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="">
                                       <a>Services</a>
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
                            <li><BsFacebook className='icons'/></li>
                            <li><BsTwitter className='icons'/></li>
                            <li><BsInstagram className='icons'/></li>
                            <li><BsLinkedin className='icons'/></li>
                            <li><BsYoutube className='icons'/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header