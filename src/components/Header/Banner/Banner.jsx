const Banner = () => {
  return (
    <div
      className="hero h-[65vh]"
      style={{ backgroundImage: 'url("https://i.ibb.co/vxV16rt/banner.jpg)' }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-white">
        <div className=" space-y-6">
          <h1 className="text-5xl font-bold ">Welcome to <span className="text-orange-400">Foot</span>events</h1>
          <h2 className="text-2xl font-medium text-[#ffc100]">
            We Are A Team Of Professionals
          </h2>
          <h2 className="text-2xl font-medium text-[#ffc100]">
            Working On Football Event Managements Since 2001
          </h2>
          <p className="text-xl font-medium
          ">
            With Over 22 Years Experience And An Enviable Reputation , We Offer
            A Highly Professional And Personal Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
