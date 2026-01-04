import React, { useState, use } from 'react';
import ServiceCard from './ServiceCard';

const OurServices = ({ ourService }) => {
  const services = use(ourService);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className='bg-[#03373D] p-20 rounded-2xl my-20'>
      <div className='text-white'>
        <h2 className='text-center text-4xl font-extrabold'>Our Services</h2>
        <p className='text-center text-sm mt-5 mb-10'>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={{ ...service, id: index }}   
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
