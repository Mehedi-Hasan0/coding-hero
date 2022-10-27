import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const checkOutData = useLoaderData();
    return (
        <div>
            <div>
                <h2 className=' font-poppins font-bold text-center md:text-4xl text-2xl my-7 mx-10'>Take the next step and invest in you <span className=' text-[#570DF8]'>{user?.displayName}</span></h2>
                <p className=' font-poppins font-medium text-center md:text-xl text-lg mb-6 mx-10'>Purchase: {checkOutData.course_header}</p>
                <hr className=' mx-auto border' />
            </div>

            <div>
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            for="fName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fName"
                                            id="fName"
                                            placeholder="First Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            for="lName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lName"
                                            id="lName"
                                            placeholder="Last Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label
                                    for="guest"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    How much you want to pay?
                                </label>
                                <input
                                    type="number"
                                    name="guest"
                                    id="guest"
                                    placeholder="50$"
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                                />
                            </div>

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            for="date"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            for="time"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            id="time"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Do you want this for free?
                                </label>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="radio1"
                                            id="radioButton1"
                                            className="h-5 w-5"
                                        />
                                        <label
                                            for="radioButton1"
                                            className="pl-3 text-base font-medium text-[#07074D]"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="radio1"
                                            id="radioButton2"
                                            className="h-5 w-5"
                                        />
                                        <label
                                            for="radioButton2"
                                            className="pl-3 text-base font-medium text-[#07074D]"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#my-modal-2" className="btn">open modal</a>
                                <div className="modal" id="my-modal-2">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Congratulations {user.displayName}!</h3>
                                        <p className="py-4">You've been successfully purchase our course for free! Chase your Dream!!</p>
                                        <div className="modal-action">
                                            <Link to='/courses' className="btn">Yay!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Checkout;