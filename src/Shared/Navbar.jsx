import React, { useContext } from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { logOut, user } = useContext(authContext)
    const navItems = <>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/checkout-list"> Checkout List </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </>
    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to Log Out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    logOut()
                    .then(res => {
                        console.log(res)
                        Swal.fire({
                            title: "Logged Out!",
                            text: "User has been logged out successfully",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "Error!",
                            text: err,
                            icon: "error"
                          });
                    })
                }
            });


    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button> : <Link to="/login" className='btn btn-primary'>LogIn</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;