import React from 'react';
import { GrDeliver } from 'react-icons/gr';

const WorkCards = () => {
    return (
        <div className='mt-10 flex flex-col items-center'>
            <div>
                <h2 className='text-3xl font-bold '>How it Works</h2>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 p-5 lg:p-10'> 
             <div className='h-70 w-56 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 duration-300'>
               <GrDeliver className='text-4xl' />

                <h4 className='mt-4 font-bold'>Booking Pick & Drop</h4>
                <p>Effortless pick-up and drop-off service, ensuring timely, safe, and convenient travel. </p>
            </div>
             <div className='h-70 w-56 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 duration-300'>
                <GrDeliver className='text-4xl' />

                <h4 className='mt-4 font-bold'>Cash On Delivery</h4>
                <p>Pay for your delivery when it arrives, ensuring a secure and convenient payment experience.</p>
            </div>
             <div className='h-70 w-56 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 duration-300'>
                <GrDeliver className='text-4xl' />

                <h4 className='mt-4 font-bold'>Delivery Hub</h4>
                <p>Centralized delivery management for efficient and organized logistics.</p>
            </div>
             <div className='h-70 w-56 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 duration-300'>
                <GrDeliver className='text-4xl' />

                <h4 className='mt-4 font-bold'>Booking SME & Corporate</h4>
                <p>Specialized booking services tailored for small and medium enterprises and corporate clients.</p>
            </div>
           </div>
        </div>
    );
};

export default WorkCards;