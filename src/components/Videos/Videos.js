import React from 'react'
import data from './data';

function Videos() {
     
  return (
    <div className='container'>
        <div className='row'>
          <div className='title'>
              <h2>Videos</h2>
          </div>
           <div className='col-md-6'>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/2WVXjYKt8kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>

           <div className='col-md-6'>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/OCB5fSUAybU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>

           <div className='col-md-6'>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/M6UNiFghEb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>

           <div className='col-md-6'>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/ePc17vPMIV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
        </div>
    </div>
  )
}

export default Videos