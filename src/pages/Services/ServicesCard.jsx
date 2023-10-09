import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesCard = ({service}) => {

    const {id,name,img_url,price,short_description}= service;

    return (
        <div className="card w-full bg-base-100 shadow-xl mt-5">
  <figure><img className='h-[320px] w-full' src={img_url} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <p>Price : {price}</p>
    
    <div className="card-actions justify-end">
        <Link to={`/services/${id}`}>

      <button className="btn btn-primary">View Details</button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;