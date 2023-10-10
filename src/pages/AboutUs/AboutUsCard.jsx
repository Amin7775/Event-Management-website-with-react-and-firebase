import React from "react";

const AboutUsCard = ({member}) => {
    const {name,job_role,img_url}=member;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={img_url}
          className="w-full md:w-5/6 lg:w-full h-[400px] md:h-[450px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name}</h2>
        <p>{job_role}</p>
        
      </div>
    </div>
  );
};

export default AboutUsCard;
