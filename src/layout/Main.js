import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' bg-slate-100'>
                <div className='flex flex-row lg:mx-14 md:mx-7'>
                    <div className=' w-1/4 hidden md:block bg-slate-50 shadow-lg '>
                        <Sidebar></Sidebar>
                    </div>
                    <div className=' w-full md:w-3/4'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default Main;