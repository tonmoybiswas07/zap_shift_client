import React from 'react';
import bgImage from '../../../assets/be-a-merchant-bg.png';
import locationMerchant from '../../../assets/location-merchant.png'

const CustomerSatisfaction = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center",}} className="container bg-[#03373D] p-10 md:p-20 rounded-2xl my-20 text-white flex flex-col lg:flex-row items-center gap-10">
        
      
                <div className="content">
                    <h1 className='text-5xl'>Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className='text-sm my-5'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <button className='btn rounded-full bg-[#CAEB66] border-2 border-[#CAEB66] hover:bg-white'>Become a Merchant</button>
                        <button className='btn rounded-full border-2 border-[#CAEB66] hover:bg-[#CAEB66]'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className=''>
                    <img src={locationMerchant} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CustomerSatisfaction;