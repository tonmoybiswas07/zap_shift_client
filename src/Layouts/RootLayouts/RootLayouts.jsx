import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const RootLayouts = () => {
    return (
        <div className=' max-w-7xl mx-auto min-h-screen  pt-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;