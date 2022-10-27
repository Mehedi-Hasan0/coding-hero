import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sideCategories')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <div className=' mt-12'>
                <h1 className=' font-poppins text-xl lg:text-3xl text-gray-500 font-semibold text-center'>All Courses</h1>
                <div className=' mt-8 mx-3'>
                    {
                        courses.map(course => <p
                            className=' text-center my-3 lg:text-lg text-base font-poppins text-gray-800 font-medium hover:text-[#570DF8]  underline '
                            key={course.id}>
                            <Link to=''>{course.name}</Link>
                        </p>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Sidebar;