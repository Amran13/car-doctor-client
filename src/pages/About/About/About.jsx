import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='flex justify-between my-32'>
            <div className='w-2/5 relative'>
                <img src={person} alt="" />
                <img className='w-2/3 absolute border-8 border-zinc-50 top-48 left-60' src={parts} alt="" />
            </div>
            <div className='w-3/5 pl-32 space-y-4'>
                <h3 className='text-lg font-bold text-orange-500'>About Us</h3>
                <h1>We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='mt-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <button className='btn btn-outline hover:bg-orange-500 hover:border-none'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;