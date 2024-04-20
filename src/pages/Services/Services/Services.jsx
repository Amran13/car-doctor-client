import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../Shared/SectionHeading';
import Service from '../Service/Service';
import L1 from '../../../assets/icons/L1.png'
import L2 from '../../../assets/icons/L2.png'
import L3 from '../../../assets/icons/L3.png'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const sectionName = `Service`
    const sectionHeading = `Our Service Area`
    const sectionPara = `the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    return (
        <div>
            <SectionHeading heading={sectionHeading} name={sectionName} para={sectionPara} ></SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-10'>
                {
                    services.map(item => <Service key={item._id} service={item}></Service>)
                }
            </div>
            <div className='flex justify-around items-center h-56 bg-zinc-950 rounded-lg text-white my-24'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={L3} alt="" />
                    </div>
                    <div className='ml-4'>
                        <p>We are open monday-friday</p>
                        <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={L2} alt="" />
                    </div>
                    <div className='ml-4'>
                        <p>Have a question?</p>
                        <h2 className='text-2xl font-bold'>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={L1} alt="" />
                    </div>
                    <div className='ml-4'>
                        <p>Need a repair? our address</p>
                        <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;