import React, { useEffect, useState } from 'react';
import banner from '../../../assets/images/checkout/checkout.png'
import logo from '../../../assets/logo.svg'
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, service_id, title, price, img, description, facility } = useLoaderData()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='relative'>
                <img className='mx-auto w-full ' src={banner} alt="" />
                <div className='bg-gradient-to-r from-[#151515] h-full text-white absolute top-0'>
                    <h1 className='text-6xl font-bold mt-28 ml-12'>Service Details</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 my-24'>
                <div className='grid col-span-2 space-y-6'>
                    <img className='w-full' src={img} alt="" />
                    <h1 className='text-3xl font-bold text-center'> {title} </h1>
                    <p>{description}</p>
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            facility.map(item => <div key={facility.indexOf(item)} className='w-92 bg-zinc-200 space-y-4 px-4 py-12 rounded-lg'>
                                <h3 className='text-2xl font-bold'> {item.name} </h3>
                                <div className='w-20 h-1.5 rounded bg-orange-500'></div>
                                <p> {item.details} </p>
                            </div>)
                        }
                    </div>

                </div>
                <div className='grid col-span-1 bg-zinc-200 px-2'>
                    <div>
                        <h2 className='text-3xl font-bold py-10 pl-6'>Services</h2>
                        <div className='space-y-4 mx-6 '>
                            {
                                services.map(service => <div key={service._id}>
                                    <div className='w-full hover:bg-orange-500 btn  rounded-md h-8 bg-zinc-50 text-lg px-4'> {service.title} </div>
                                </div>)
                            }
                        </div>
                        <div className='h-[450px] bg-zinc-900 text-center text-white py-8 mt-16 rounded-lg'>
                            <div className='mt-4 space-y-8'>
                                <img className='mx-auto' src={logo} alt="" />
                                <h3 className='w-2/3 text-2xl mx-auto font-bold'>Need help? We are here to help you.</h3>
                                <div className='text-center'>
                                    <h3 className='text-xl font-bold'><span className='text-orange-500'>Car Doctor</span> Special </h3>
                                    <p> Save up to <span className='text-orange-500'>60% off</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-16'>
                            <h1 className='text-4xl text-center font-bold'>Price :  ${price} </h1>
                            <button className='btn btn-block bg-orange-500 mt-6 hover:bg-orange-600'>Proceed Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;