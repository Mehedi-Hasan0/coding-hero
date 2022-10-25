import React from 'react';
import Courses from '../Courses/Courses';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='flex flex-row'>
            <div className=' w-2/5 border'>
                <Sidebar></Sidebar>
            </div>
            <div className=' w-3/5 border'>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;