import Banner from "../../components/Header/Banner/Banner";
import UpcomingEvents from "../../components/UpcominEvents/UpcomingEvents";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* main section */}
      <div className="max-w-[1440px] border-2 mx-auto">
        {/* Upcoming Events */}
        <UpcomingEvents></UpcomingEvents>
      </div>
    </div>
  );
};

export default Home;
