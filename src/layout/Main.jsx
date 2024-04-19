import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { authContext } from '../Provider/AuthProvider';

const Main = () => {
    const { loading } = useContext(authContext)

    return (
        <div>
            <Navbar></Navbar>
            {
                loading ? <div className='flex justify-center'><span className="loading loading-spinner loading-lg"></span></div>
                    : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Main;