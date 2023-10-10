import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import UpcomingEvents from "../../components/UpcominEvents/UpcomingEvents";
import Services from "../Services/Services";
import WhatClientSays from "../../components/WhatClientSays/WhatClientSays";

const Home = () => {
  const events = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      {/* main section */}
      {/* Upcoming Events */}
      <div className="max-w-[1440px]  mx-auto">
        <UpcomingEvents></UpcomingEvents>
      </div>

      {/* Services Section */}
      <div className="max-w-[1440px]  mx-auto p-1">
        <Services events={events}></Services>
      </div>
      <div>
        <WhatClientSays></WhatClientSays>
      </div>
    </div>
  );
};

export default Home;
