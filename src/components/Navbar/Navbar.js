import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos.svg';
import close from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import user from '../../assets/user.png';

const Navbar = () => {
    const [toggles, setToggles] = useState(false);
    const [toggleText, setToggleText] = useState('Light');

    const handleTheme = () => {
        setToggleText('Dark');
    }
    return (
        <nav className='flex justify-between items-center py-5 w-full bg-slate-50 sticky top-0 shadow-md'>
            <Link to='/' className=' hover:text-black'>
                <div className='flex flex-row items-center'>
                    <img src={logo} alt="quiz show" className='w-[50px] ml-6' />
                    <p className=' font-poppins font-medium text-xl'>Coding Hero</p>
                </div>
            </Link>

            <div className='nav-links sm:flex hidden items-center mr-8'>
                <Link to='/courses'>Courses</Link>
                <Link to='/blogs'>Blog</Link>
                <Link to='/faq'>FAQ</Link>
                <div className="form-control">
                    <label onClick={handleTheme} className="label cursor-pointer">
                        <span className="label-text text-lg mr-2" >{toggleText}</span>
                        <input type="checkbox" className="toggle" unchecked />
                    </label>
                </div>
                <Link to='/login'>Login</Link>
            </div>
            <div className='sm:hidden flex flex-1 justify-end items-center mr-8'>
                <img src={toggles ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggles((previous) => !previous)} />

                <div className={`${toggles ? 'flex' : 'hidden'} p-6 bg-slate-50 absolute top-[4.125rem] right-0 min-w-[140px] rounded-xl`}>
                    <div className='mobile-nav-links flex flex-col justify-center'>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;