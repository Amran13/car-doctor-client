import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import banner from '../../assets/images/checkout/checkout.png'

const CheckOut = () => {
    const {user} = useContext(authContext)
    const { _id, title, service_id, price, img } = useLoaderData()
    console.log(img)
    const handleCheckOut = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.contact.value;
        const price = form.price.value;
        const email = form.email.value;

        const custormerBooking = {
            customerName : name,
            serviceDate : date,
            title,
            service_id,
            phone,
            price,
            email,
            img
        }
        console.log(custormerBooking)
        fetch(`http://localhost:5000/bookings`, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(custormerBooking)
        })
        .then(res => res.json())
        .then(res => {
            if(res.insertedId){
                Swal.fire({
                    title: "Service Added!",
                    text: "Service has been added in successfully",
                    icon: "success"
                  });
                  form.reset()
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='relative'>
                <img className='mx-auto w-full ' src={banner} alt="" />
                <div className='bg-gradient-to-r from-[#151515] h-full text-white absolute top-0'>
                    <h1 className='text-6xl font-bold mt-28 ml-12'>Checkout Details</h1>
                </div>
            </div>
            <div className="hero my-12 py-8 bg-base-200">
                <div className="hero-content w-2/3 flex-col">
                    <div className="card shrink-0 w-full py-12 shadow-2xl bg-base-100">
                        <form onSubmit={handleCheckOut} className="card-body mx-auto space-y-4">
            <h2 className='text-3xl font-bold text-center mb-6'> Service :  {title} </h2>
                            <div className='flex'>
                                <div className="form-control mx-2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type Your Name" defaultValue={user?.displayName} className="input input-bordered" required />
                                </div>
                                <div className="form-control mx-2 w-full">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered " required />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="form-control mx-2">
                                    <label className="label">
                                        <span className="label-text">Contact</span>
                                    </label>
                                    <input type="number" name='contact' placeholder="Phone Number" className="input input-bordered" required />
                                </div>
                                <div className="form-control mx-2">
                                    <label className="label">
                                        <span className="label-text">Due Ammount</span>
                                    </label>
                                    <input type="text" name='price' readOnly value={'$ ' + price} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="form-control mx-2 w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" readOnly name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control pt-4">
                                <input type='submit' className="btn btn-primary" value="CheckOut"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;