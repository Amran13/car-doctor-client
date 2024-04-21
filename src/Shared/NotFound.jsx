import React from 'react';
import myImg from '../assets/images/404/Frame.png'

const NotFound = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <img src={myImg} alt="" />
        </div>
    );
};

export default NotFound;