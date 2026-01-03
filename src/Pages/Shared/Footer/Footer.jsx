import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Container from '../../../Components/Container/Container';

const Footer = () => {
    return (
      
         <footer className="footer bg-black rounded-4xl footer-horizontal footer-center text-primary-content p-10">
  <aside>
    <div className='flex justify-center items-center '>
        <Logo></Logo><h1 className='text-3xl font-bold pt-9'>ZapShift</h1>
    </div>
    <p className="text-gray-300 text-sm mt-4">
     Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
   
    </p>
    
  </aside>
  <hr class="w-7xl border-t-2 border-dashed border-[#03464D] mx-auto my-1" />

  <nav>
    

   <ul className='flex justify-center items-center gap-10'>
    <li><a href="">Services</a></li>
    <li><a href="">Coverage</a></li>
    <li><a href="">About Us</a></li>
    <li><a href="">Pricing</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contact</a></li>
   </ul>
  </nav>
  <hr class="w-7xl border-t-2 border-dashed border-[#03464D] mx-auto my-1" />
  <div className='flex justify-center items-center gap-10'>
    <FaLinkedin className='text-3xl'/>
    <FaXTwitter className='text-3xl'/>
    <FaFacebookF className='text-3xl'/>
    <FaYoutube className='text-3xl'/>


  </div>
</footer>
      
    );
};

export default Footer;