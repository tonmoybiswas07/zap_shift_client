import React from 'react';

const Coverage = () => {
    return (
        <div className='bg-white p-10 my-10 rounded-2xl'>
            <div>
                <h2 className='text-5xl font-extrabold'>We are available in 64 districts</h2>
            </div>
            <div className='flex justify-start items-start mt-5'>
                <div>
                <input className='bg-gray-200 border-2 border-[#CAEB66] rounded-2xl h-10 w-70 pl-3' placeholder='search here' type="search" name="" id="" />
            </div>
            <button className='btn rounded-2xl -ml-6 bg-[#CAEB66] border-2 border-[#CAEB66]'>Search</button>
            </div>
            <hr  className='mt-10 text-gray-300'/>
        </div>
    );
};

export default Coverage;