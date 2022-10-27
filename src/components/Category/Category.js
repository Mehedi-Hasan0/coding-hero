import { Link, useLoaderData } from 'react-router-dom';
import back from '../../assets/arrow-89-32.png';

const Category = () => {
    const course_details = useLoaderData();
    return (
        <div>
            {
                course_details.map(details => <div key={details.id} className=' bg-[#373f49]  text-white'>
                    <div className='flex lg:flex-row flex-col-reverse'>
                        <div className=' py-14 mx-4 lg:w-2/3'>
                            <Link to='/courses' className=' flex flex-row items-center cursor-pointer hover:underline mb-4'>
                                <img className=' w-[18px] ' src={back} alt="back" />
                                <p className='font-poppins font-semibold text-lg ml-1'>BACK TO COURSES</p>
                            </Link>
                            <h1 className='font-poppins font-bold lg:text-5xl md:text-5xl text-4xl mb-4'>{details.course_header}</h1>
                            <p className='font-poppins md:text-lg text-base mb-6'>{details.course_description}</p>
                            <Link to={`/courses/${details.id}`} className="btn btn-primary">Get premium access</Link>
                        </div>
                        <div className=' my-7 lg:mx-9 sm:mx-auto md:mx-auto mx-5 bg-white max-w-[500px] max-h-[500px]'>
                            <div className=' lg:my-auto'>
                                <img className=' w-[500px]' src={details.img_link} alt="courseImage" />
                                <h2 className=' text-gray-700 font-poppins font-bold text-xl text-center mx-4 my-3'>{details.number_of_students}</h2>
                            </div>
                        </div>

                    </div>
                </div>)
            }

            {
                course_details.map(details => <div key={details.id}>
                    <div>
                        <div className=' md:my-36 md:mx-8 my-20  mx-4'>
                            <h1 className='font-poppins text-center font-bold lg:text-4xl md:text-2xl text-xl text-gray-800'>Course Overview</h1>
                            <strong><p className=' font-popping md:text-xl text-lg text-gray-600 md:text-center text-justify md:mx-20 mx-6 mt-4'>{details.course_overview}</p></strong>
                        </div>
                        <div className=' md:my-36 md:mx-8 my-20  mx-4 p-4 bg-slate-100 shadow-lg'>
                            <h2 className=' uppercase font-poppins font-semibold md:text-2xl text-xl text-center text-[#570DF8] my-6'>What you will learn!</h2>
                            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 mx-6 my-6'>{details.learnings.map(learn => <li
                                className=' font-poppins font-medium text-justify hover:text-[#570DF8] text-slate-700 cursor-pointer text-xl'
                                key={learn.id}>
                                {learn.point}
                            </li>)}
                            </div>
                        </div>

                        <div className='md:my-36 md:mx-8 my-20 mx-6'>
                            <div>
                                <h2 className=' font-poppins font-semibold text-gray-700 md:text-4xl text-2xl'>Course Includes</h2>
                                <div>{details.course_includes.map(include => <li
                                    key={include.id}
                                    className='font-poppins font-medium text-justify hover:text-[#570DF8] text-slate-700 cursor-pointer md:text-xl text-base my-3'
                                >
                                    {include.includes}

                                </li>)}</div>
                            </div>
                            <div className=' my-9'>
                                <h2 className=' font-poppins font-semibold text-gray-700 md:text-4xl text-2xl'>Prerequisites</h2>
                                <div>{details.prerequisites.map(require => <li
                                    key={require.id}
                                    className='font-poppins font-medium text-justify hover:text-[#570DF8] text-slate-700 cursor-pointer md:text-xl text-base my-3'
                                >

                                    {require.knowledge}
                                </li>)}</div>
                            </div>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Category;