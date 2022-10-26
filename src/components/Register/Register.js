import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password, name, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                navigate('/');
            }).catch(error => {
                console.error(error);
                setError(error.message);
            })

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error));
        }
    }
    return (
        <div className=' mt-10 mx-16 font-poppins'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className=' text-4xl text-stone-800 text-center font-medium mt-4'>Register Now!</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type='text' name='photoURL' placeholder="Your photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>{error}</p>
                    <p>Already have an account? <Link className='text-[#570DF8] font-medium text-base' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;