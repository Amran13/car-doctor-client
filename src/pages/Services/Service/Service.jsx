import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-500 font-bold'>Price : ${price} </p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/checkout/${_id}`} className="btn btn-primary">Buy Now</Link> */}
                    <Link to={`/services/${_id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;