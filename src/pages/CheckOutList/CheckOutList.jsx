import React, { useContext, useEffect, useState } from 'react';
import banner from '../../assets/images/checkout/checkout.png'
import { authContext } from '../../Provider/AuthProvider';

const CheckOutList = () => {
    const { user } = useContext(authContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    // console.log('bookings :', bookings, user)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.deletedCount === 1){
                const remaining = bookings.filter(item => item._id !== id)
                setBookings(remaining)
            }
        })
        .catch(err => console.log(err))
    }
    console.log(bookings)
    return (
        <div>
            <div className='relative'>
                <img className='mx-auto w-full ' src={banner} alt="" />
                <div className='bg-gradient-to-r from-[#151515] h-full text-white absolute top-0'>
                    <h1 className='text-6xl font-bold mt-28 ml-12'>Checkout List</h1>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table my-24">
                    {
                        bookings.length > 0 ? <tbody>
                        {
                            bookings.map(item => <tr key={item._id}>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className='btn'>X</button>
                                </th>
                                <td>
                                    <div>
                                        <img className='w-32 rounded-lg' src={item.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold"> {item?.title ? item.title : 'Service'} </div>
                                </td>
                                <td className='text-lg font-bold'> {item.price} </td>
                                <td className='font-medium'> {item.serviceDate} </td>
                                <th>
                                    <button className="btn bg-orange-500 hover:bg-orange-600">Pending</button>
                                </th>
                            </tr>)
                        }
                    </tbody> : <div className='text-2xl text-center font-bold'> Bookings is Empty </div>
                    }
                </table>
            </div>
        </div>
    );
};

export default CheckOutList;