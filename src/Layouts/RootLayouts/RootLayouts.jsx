import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const RootLayouts = () => {
    return (
        <div className='mx-3 md:mx-5 lg:mx-7'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;