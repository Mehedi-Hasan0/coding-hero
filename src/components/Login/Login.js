import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('currentUser', user);
                form.reset();
                navigate('/')
            }).catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='mt-10 mx-16 font-poppins'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className=' text-4xl text-stone-800 text-center font-medium mt-4'>Login Now!</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>New to Coding Hero? <Link className='text-[#570DF8] font-medium text-base' to='/register'>Register</Link></p>
                    <hr className=' bg-slate-400 h-[2px] my-1' />
                    <p className=' text-center text-base'>---  Or Login With  ---</p>
                    <hr className=' bg-slate-400 h-[2px] my-1' />
                    <div className=' flex flex-row justify-around items-center'>
                        <div className=' p-2 rounded-xl bg-slate-100 hover:bg-slate-200 shadow-lg flex flex-row items-center'>
                            <img className=' w-[32px]' src={google} alt="Google" />
                            <p className=' font-poppins text-base mx-2'>Google</p>
                        </div>
                        <div className=' p-2 rounded-xl bg-slate-100 hover:bg-slate-200 shadow-lg flex flex-row items-center'>
                            <img className=' w-[32px]' src={github} alt="Github" />
                            <p className=' font-poppins text-base mx-2'>Github</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;