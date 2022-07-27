import React from 'react'
import Banner from '../Banner/VideoBanner';
import './Videos.css'

function Videos() {
     
  return (
    <>
    <Banner/>
    <div className='container'>
        <div className='row'>
          <div className='title'>
              <h2>Videos</h2>
          </div>
           <div className='col-md-12 col-lg-12 videoClass'>
           <iframe width="100%" height="500" src="https://www.youtube.com/embed/2WVXjYKt8kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>

           <div className='col-md-6 videoClass'>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/OCB5fSUAybU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>

           <div className='col-md-6 videoClass'>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/MhcY7Gg760w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>

           <div className='col-md-12 col-lg-12 videoClass'>
           <iframe width="100%" height="500" src="https://www.youtube.com/embed/ShRgdESVCgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
        </div>
    </div>
    </>
  )
}

export default Videos