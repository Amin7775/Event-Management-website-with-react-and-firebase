import React from 'react';

const ServicesCard = ({service}) => {

    const {name,img_url,price,short_description}= service;
    
    return (
        <div className="card w-full bg-base-100 shadow-xl mt-5">
  <figure><img className='h-[320px] w-full' src={img_url} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <p>Price : {price}</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;