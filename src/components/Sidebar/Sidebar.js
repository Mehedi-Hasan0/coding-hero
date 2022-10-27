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
            <h1>All Courses: {courses.length}</h1>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to=''>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;