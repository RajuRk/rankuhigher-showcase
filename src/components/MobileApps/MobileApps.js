import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Mobileapps.css';
import Banner from '../Banner/MobileAppBanner';

function MobileApps() {

    const MobileImg = [
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-1.webp'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-2.webp'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-3.webp'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-4.webp'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-5.webp'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-6.webp'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/mobile-app-7.webp'
        },
    ];

    const paydImg = [
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/payd-1.png'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/payd-2.png'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/payd-3.png'
        },
        {
            'img': 'https://rankuhigher.in/projects/mobileapps/payd-4.png'
        },
    ];

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

  return (
    <>
    <Banner/>
    <div className="container">
       <div className='row'>
        <div className='section_one'>
            <div className='title-frt'>
                <h3>TRAVELLINK</h3>
            </div>
            <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={1500} swipeable={false} draggable={false}>
                {
                MobileImg.map((apps,i)=>{
                    return <div class="appImg">
                        <img src={apps.img} alt=""/>
                    </div> 
                    })
                }
            </Carousel>
        </div>
        <div className='section_one'>
            <div className='title-sec'>
                <h3>PAYD</h3>
            </div>
            <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={1500} swipeable={false} draggable={false}>
                {
                paydImg.map((apps,i)=>{
                    return <div class="appImg-payd">
                        <img src={apps.img} alt=""/>
                    </div> 
                    })
                }
            </Carousel>
        </div>
       </div>
    </div>
    </>
  )
}

export default MobileApps