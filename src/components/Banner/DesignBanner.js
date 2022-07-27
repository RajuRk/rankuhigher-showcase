import React from 'react';
import './Banner.css';
import BannerImg from '../../images/design-banner.jpg';

function Banner() {
  return (
    <div className='banner' id='banner'>
       <div className='container-fluid'>
           <div className='row'>
              <div className='banner-sec' style={{padding: "0px"}}>
                <img src={BannerImg} alt="Banner" />
                <div className='overlay'></div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Banner