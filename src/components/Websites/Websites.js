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
        "img": "https://rankuhigher.in/projects/fluidpumps.png"
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
  ]
   return (
    <div class="container">
    <div class="row">
        <div className='title'>
            <h2>Websites</h2>
        </div>
        {
            webisteList.map((list,i) => {
                return <div className='col-md-4 custom-pro-pic'>
                <div class="pic">
                  <img src={list.img} alt={list.name} className='img'/>
                  {/* <div class="text-block">
                    <h4 className='m-2' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</h4>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title custom-text" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                             <img src={list.img} alt={list.name} style={{width: "100%"}}/>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            })
        }

        
    </div>
</div>
  )
}

export default Websites