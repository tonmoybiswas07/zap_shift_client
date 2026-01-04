import React from 'react';
import servicesImg from '../../../assets/service.png'

const ServiceCard = ({ service, selectedId, onSelect }) => {
  const { id, description, title } = service;

  const active = selectedId === id;

  return (
    <div
      onClick={() => onSelect(id)}
      className={`h-75 w-87 flex justify-center items-center flex-col rounded-lg p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 duration-300
      ${active ? 'bg-[#CAEB66]' : 'bg-base-200'}`}
    >
      <div className='flex justify-center items-center mb-4 h-16 w-16 bg-gray-300 rounded-full'>
        <img className='h-10 w-10' src={servicesImg} alt="" />
      </div>

      <h2 className='font-bold'>{title}</h2>
      <p className='text-center text-sm mt-2'>{description}</p>
    </div>
  );
};

export default ServiceCard;
