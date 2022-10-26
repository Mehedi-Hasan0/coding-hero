import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-row mx-14'>
                <div className=' w-2/5 border'>
                    <Sidebar></Sidebar>
                </div>
                <div className=' w-3/5 border'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;