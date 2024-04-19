import React from 'react';

const SectionHeading = ({ name, heading, para }) => {
    return (
        <div className='text-center mt-24 space-y-4 mb-6'>
            <h2 className='text-2xl font-bold text-orange-500'> {name} </h2>
            <h1 className='text-6xl font-bold'> {heading} </h1>
            <p className='w-1/2 mx-auto'> {para} </p>
        </div>
    );
};

export default SectionHeading;