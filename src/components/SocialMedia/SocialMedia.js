import React from 'react'
import Masonry from "react-responsive-masonry"

function SocialMedia() {
    const socialMediaImg = [
        {
            "img": "https://rankuhigher.in/projects/socialmedia/1-min.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/socialmedia/2-min.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/socialmedia/3-min.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/socialmedia/4-min.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/socialmedia/5-min.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/socialmedia/6-min.jpg"
        },
        {
            "img": "https://rankuhigher.in/projects/socialmedia/7-min.jpg"
        },
    ]
  return (
    <div className='container'>
        <div className='row'>
            <div className='title'>
               <h2>Social Media</h2>
            </div>
            <Masonry columnsCount={2} gutter="10px">
            {
            socialMediaImg.map((image,i) => (
                <img key={i} src={image.img} style={{width: "100%", display: "block", boxShadow: "0px 0px 6px 2px #c9c9c9"}}/>
            ))
            }
            </Masonry>
        </div>
    </div>
  )
}

export default SocialMedia