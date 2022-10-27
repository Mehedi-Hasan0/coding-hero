import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div className='bg-slate-50 shadow-md my-6 md:mx-auto mx-5 rounded-2xl max-w-xl p-5'>
                <h2 className=' font-poppins font-medium text-gray-800 text-2xl m-5'>1. what is cors?</h2>
                <p className='m-5 font-poppins'>Use CORS to allow cross-origin access. CORS is a part of HTTP that lets servers specify any other hosts from which a browser should permit loading of content.
                </p>
            </div>
            <div className='bg-slate-50 shadow-md my-6 md:mx-auto mx-5 rounded-2xl max-w-xl p-5'>
                <h2 className=' font-poppins font-medium text-gray-800 text-2xl m-5'>2. Why are you using firebase? </h2>
                <p className='m-5 font-poppins'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                </p>
            </div>
            <div className='bg-slate-50 shadow-md my-6 md:mx-auto mx-5 rounded-2xl max-w-xl p-5'>
                <h2 className=' font-poppins font-medium text-gray-800 text-2xl m-5'>3. How does the private route work?</h2>
                <p className='m-5 font-poppins'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                </p>
            </div>
            <div className='bg-slate-50 shadow-md my-6 md:mx-auto mx-5 rounded-2xl max-w-xl p-5'>
                <h2 className=' font-poppins font-medium text-gray-800 text-2xl m-5'>4 What is Node? How does Node work?</h2>
                <p className='m-5 font-poppins'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                </p>
            </div>
        </div>
    );
};

export default Blog;