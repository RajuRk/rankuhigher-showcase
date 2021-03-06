import React from 'react';
import './Websites.css';
import WebsiteBanner from '../Banner/WebsiteBanner';

function Websites() {
  const webisteList = [
    {
        "name": "AIC Raise",
        "img": "https://rankuhigher.in/projects/aic.png"
    },
    {
        "name": "Edudharma",
        "img": "https://rankuhigher.in/projects/edudharma.png"
    },
    {
        "name": "Fluid Pumps",
        "img": "https://rankuhigher.in/projects/Fluid_Pumps-desktop.png"
    },
    {
        "name": "MCET",
        "img": "https://rankuhigher.in/projects/mcet.png"
    },
    {
        "name": "Mettynest",
        "img": "https://rankuhigher.in/projects/mettynest.png"
    },
    {
        "name": "Rathinam Shelters",
        "img": "https://rankuhigher.in/projects/rathinam-shelters.png"
    },
    {
        "name": "Rathinam School",
        "img": "https://rankuhigher.in/projects/Rathinam_school.png"
    },
    {
        "name": "Regenf",
        "img": "https://rankuhigher.in/projects/regenf.png"
    },
    {
      "name": "Karma",
      "img": "https://rankuhigher.in/projects/karma_desktop.png"
    },
    {
      "name": "Milestone Exhibition",
      "img": "https://rankuhigher.in/projects/milestone-desktop.png"
    },
  ];

  const webisteMobileList = [
    {
      "img": "https://rankuhigher.in/projects/Aic_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/edudharma-mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/fluidPumps_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/mcet_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/mettynest_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/RathinamShelters_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/school_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/regenf_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/karma_mobile.png"
    },
    {
      "img": "https://rankuhigher.in/projects/milestone-mobile.png"
    },
  ]
   return (
    <>
    <WebsiteBanner/>
    <div className='websites'>
      <div className="container">
      <div className="row">
          <div className='title'>
              <h2>Websites</h2>
          </div>
          <div className='col-md-8 views desk'>
            <div className='rotate-title desktop'>
                <h3>Desktop View</h3>
            </div>
            {
                webisteList.map((list,i) => {
                    return <div className='custom-pro-pic' key={i}>
                    <div class="pic">
                      <img src={list.img} alt={list.name} className='img'/>
                    </div>
                  </div>
                })
            }
          </div>
          <div className='col-md-4 views mob'>
            <div className='rotate-title mobile'>
                <h3>Mobile View</h3>
            </div>
            {
                webisteMobileList.map((list,i) => {
                    return <div className='custom-pro-pic' style={{textAlign: "center"}}>
                    <div class="pic">
                      <img src={list.img} alt={list.name} className='img'/>
                    </div>
                  </div>
                })
            }
          </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Websites