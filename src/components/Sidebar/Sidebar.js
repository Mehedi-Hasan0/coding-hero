import React from 'react';
import { useState } from 'react';

const Sidebar = () => {
    const [courses, setCourses] = useState([])
    return (
        <div>
            <h1>All Courses</h1>
        </div>
    );
};

export default Sidebar;