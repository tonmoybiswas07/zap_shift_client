import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../../../assets/brands/amazon_vector.png'
import brand2 from '../../../assets/brands/amazon.png'
import brand3 from '../../../assets/brands/casio.png'
import brand4 from '../../../assets/brands/moonstar.png'
import brand5 from '../../../assets/brands/randstad.png'
import brand6 from '../../../assets/brands/star.png'
import brand7 from '../../../assets/brands/start_people.png'


const Brands = () => {
    return (
        <div className='mt-10'>
            <div>
                <h3 className='text-center text-[28px]'>We've helped thousands of sales teams</h3>
            </div>
            <div>
                <Marquee speed={100} className='flex items-center my-15'>
                    <img src={brand1} alt="Brand 1" className="mx-4" />
                    <img src={brand2} alt="Brand 2" className="mx-4" />
                    <img src={brand3} alt="Brand 3" className="mx-4" />
                    <img src={brand4} alt="Brand 4" className="mx-4" />
                    <img src={brand5} alt="Brand 5" className="mx-4" />
                    <img src={brand6} alt="Brand 6" className="mx-4" />
                    <img src={brand7} alt="Brand 7" className="mx-4" />
                    <img src={brand5} alt="Brand 5" className="mx-4" />
                    
                </Marquee>
            </div>
            <hr className="border-t-2 border-dashed border-gray-400 my-6" />

        </div>
        
    );
};

export default Brands;