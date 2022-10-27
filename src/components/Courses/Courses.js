import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import back from '../../assets/backIcon.png';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>
            <Link to='/' className=' my-4 mx-4 flex flex-row items-center sm:hidden md:hidden lg:hidden'>
                <img className='' src={back} alt="Goback" />
                <p className=' font-poppins text-2xl font-medium text-gray-600 ml-1'>Home</p>
            </Link>
            <h2 className=' font-poppins text-gray-800 text-center text-3xl mt-8 sm:hidden md:hidden lg:hidden'>All Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 my-20 '>
                {
                    courses.map(course =>
                        <div key={course.id} className="card card-compact md:w-60 lg:w-[300px] w-80 bg-base-100 shadow-xl mx-auto ">
                            <figure><img className=' w-full' src={course.img_link} alt="courses" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.course_header}</h2>
                                <p className=' font-poppins text-justify text-sm text-gray-500'>{course.course_description.slice(0, 120)}<Link className=' cursor-pointer underline text-[#570DF8] opacity-80' to={`/category/${course.id}`}>..see more</Link></p>
                                <div className="card-actions justify-end mt-3">
                                    <button className="btn btn-primary">Get premium access</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Courses;