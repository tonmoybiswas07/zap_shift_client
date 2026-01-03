import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner1.png'
import bannerImg3 from '../../../assets/banner/banner1.png'

const Banner = () => {
    return (
        <div>
             <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={2000}
             >
                <div>
                    <img src={bannerImg1} />
                  
                </div>
                <div>
                    <img src={bannerImg2} />
                   
                </div>
                <div>
                    <img src={bannerImg3} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;