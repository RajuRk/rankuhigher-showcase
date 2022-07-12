import React from 'react'
import './Design.css';
import Masonry from "react-responsive-masonry"


function Design() {
    const images = [
        {
            "img": "https://rankuhigher.in/projects/designs/Badge-01.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/CD-POUCH.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/Cover.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/PAPER-ADVT.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/lAPTOP-bAG.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/MCET-Model-V-CARD.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/Mouse_Pad.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/MockUp.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/Newspaper-Model.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/Pendrive.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/Podium.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/strap-keychain-TNSGC.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/T-shirt.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/White_Mug.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/bus-design-1.jpeg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/bus-design-2.jpeg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/SOCIAL-MEDIA.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/bus-design-3.jpeg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/GOOD-FOR-ALL-1.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/designs/GOOD-FOR-ALL-4.jpg"
        },
      ]
  return (
    <div className='container'>
        <div className='row'>
        <div className='title'>
            <h2>Designs</h2>
        </div>
        <Masonry columnsCount={2} gutter="10px">
            {
            images.map((image,i) => (
                <img key={i} src={image.img} style={{width: "100%", display: "block", boxShadow: "0px 0px 6px 2px #c9c9c9"}}/>
            ))
            }
        </Masonry>
        </div>
    </div> 
  )
}

export default Design