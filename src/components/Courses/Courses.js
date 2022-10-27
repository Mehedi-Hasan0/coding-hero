import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import back from '../../assets/backIcon.png';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    const { img_link, course_header, course_description } = courses;

    return (
        <div>
            <Link to='/' className=' my-4 mx-4 flex flex-row items-center sm:hidden md:hidden lg:hidden'>
                <img className='' src={back} alt="Goback" />
                <p className=' font-poppins text-2xl font-medium text-gray-700 ml-1'>Go back</p>
            </Link>
            <h2 className=' text-center text-3xl mt-8'>All Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-20 '>
                {
                    courses.map(course =>
                        <div key={course.id} className="card card-compact md:w-60 w-80 bg-base-100 shadow-xl mx-auto ">
                            <figure><img className=' w-full' src={course.img_link} alt="courses" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
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