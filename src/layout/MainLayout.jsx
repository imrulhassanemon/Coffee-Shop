import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <div className='h-16'>
                <Navbar></Navbar>
            </div>
            {/* Dynamic Route */}

            <div className='min-h-[calc(100vh-289px)] my-12 container mx-auto'>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;