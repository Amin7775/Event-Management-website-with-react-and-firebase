const WhatClientSays = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold">What Clients Say</h1>
      {/* carasuol */}
      <div >
      <div className="carousel w-full h-full mt-10">
        {/* item 1 */}
        <div id="item1" className="carousel-item w-full bg-red-200 h-full">
          <div
            className="hero h-[60vh]"
            style={{
              background: '#1b293d',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <img className="w-40 h-40 rounded-full mx-auto my-7" src="https://i.ibb.co/sJfVYm6/a.jpg" alt="" />
                <h1 className="mb-5 text-4xl font-bold">Sophia Davis</h1>
                <p className="mb-5">
                Your event management service truly knows how to create unforgettable experiences. The attention to detail in your football tournaments is commendable.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        {/* item 2 */}
        <div id="item2" className="carousel-item w-full bg-red-200 h-full">
          <div
            className="hero h-[60vh]"
            style={{
              background: '#1b293d',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <img className="w-40 h-4w-40 rounded-full mx-auto my-7" src="https://i.ibb.co/kDbrr0g/speaker1.jpg" alt="" />
                <h1 className="mb-5 text-4xl font-bold">Daniel Mitchell</h1>
                <p className="mb-5">
                I've attended your Fan Engagement events, and I must say, the bond you create between fans and their favorite football teams is remarkable. It's a testament to your dedication.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        {/* item 3 */}
        <div id="item3" className="carousel-item w-full bg-red-200 h-full">
          <div
            className="hero h-[60vh]"
            style={{
              background: '#1b293d',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <img className="w-40 h-40 rounded-full mx-auto my-7" src="https://i.ibb.co/gjRPCL6/speaker4.jpg" alt="" />
                <h1 className="mb-5 text-4xl font-bold">Olivia Parker</h1>
                <p className="mb-5">
                The Football Awards Gala you organized was nothing short of spectacular. Your ability to honor outstanding players and contributors in the football community is truly impressive
                </p>
                
              </div>
            </div>
          </div>
        </div>
        {/* item 4 */}
        <div id="item4" className="carousel-item w-full bg-red-200 h-full">
          <div
            className="hero h-[60vh]"
            style={{
              background: '#1b293d',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <img className="w-40 h-40 rounded-full mx-auto my-7" src="https://i.ibb.co/HCkr6Wn/speaker5.jpg" alt="" />
                <h1 className="mb-5 text-4xl font-bold">William Johnson</h1>
                <p className="mb-5">
                I participated in one of your Football Skill Workshops, and I was amazed by the expertise of the coaches and the well-rounded approach to skill development. It's evident you're passionate about football education
                </p>
                
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-center w-full py-2 mb-1 gap-2">
        <a href="#item1" className="btn btn-sm bg-orange-400 active:bg-black border-none">
          1
        </a>
        <a href="#item2" className="btn btn-sm bg-orange-400 active:bg-black border-none">
          2
        </a>
        <a href="#item3" className="btn btn-sm bg-orange-400 active:bg-black border-none">
          3
        </a>
        <a href="#item4" className="btn btn-sm bg-orange-400 active:bg-black border-none">
          4
        </a>
      </div>
      </div>
    </div>
  );
};

export default WhatClientSays;
