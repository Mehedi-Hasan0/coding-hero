import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course_details = useLoaderData();
    console.log(course_details);
    return (
        <div>
            <h1>This is category!!</h1>
        </div>
    );
};

export default Category;