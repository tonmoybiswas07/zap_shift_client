import React from 'react';
import errorImg from '../../assets/image.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
        <div className=''>
            <img  src={errorImg} alt="" />
        </div>
        <Link to="/"><button className="bg-[#CAEB66] hover:bg-[#B8D95A] text-white font-bold py-2 px-4 rounded-lg">Go Home</button></Link>
        </div>
    );
};

export default Error;