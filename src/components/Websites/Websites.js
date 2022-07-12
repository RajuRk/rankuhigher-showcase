import React from 'react';
import './Websites.css';

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
  ]
   return (
    <div className='websites'>
      <div className="container">
      <div className="row">
          <div className='title'>
              <h2>Websites</h2>
          </div>
          <div className='col-md-8'>
            {
                webisteList.map((list,i) => {
                    return <div className='custom-pro-pic' key={i}>
                    <div class="pic">
                      <img src={list.img} alt={list.name} className='img'/>
                    </div>
                    <div className='title'><h4>{list.name}</h4></div>
                  </div>
                })
            }
          </div>
          <div className='col-md-4'>
            {
                webisteMobileList.map((list,i) => {
                    return <div className='custom-pro-pic' style={{textAlign: "center", marginBottom: "70px"}}>
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
  )
}

export default Websites