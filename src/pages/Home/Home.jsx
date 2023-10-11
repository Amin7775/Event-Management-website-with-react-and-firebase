import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import UpcomingEvents from "../../components/UpcominEvents/UpcomingEvents";
import Services from "../Services/Services";
import WhatClientSays from "../../components/WhatClientSays/WhatClientSays";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const events = useLoaderData();
  return (
    <div data-aos="fade-down" data-aos-duration="500">
      <div>
      <Banner></Banner>
      </div>
      {/* main section */}
      {/* Upcoming Events */}
      <div className="max-w-[1440px]  mx-auto" data-aos="zoom-in-down" data-aos-duration="2000">
        <UpcomingEvents></UpcomingEvents>
      </div>

      {/* Services Section */}
      <div className="max-w-[1440px]  mx-auto p-1" data-aos="zoom-in-down" data-aos-duration="2000">
        <Services events={events}></Services>
      </div>
      <div data-aos="zoom-in-down" data-aos-duration="2000">
        <WhatClientSays></WhatClientSays>
      </div>
    </div>
  );
};

export default Home;
