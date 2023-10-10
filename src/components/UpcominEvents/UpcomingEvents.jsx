import Marquee from "react-fast-marquee";

const UpcomingEvents = () => {
    return (
        <div className="flex gap-4 bg-[#F3F3F3] py-3 border-2 mt-2">
          <button className="btn text-white bg-orange-600 hover:bg-orange-500 ml-3 text-medium md:text-semibold text-lg md:text-xl">
            Ongoing Event
          </button>
          <Marquee
            className="font-semibold md:text-lg cursor-pointer"
            pauseOnHover speed={50}
          >
            <p className="mr-10"><span className="font-bold text-red-600">Meet and Greet Event</span> : Join us for an exclusive opportunity to meet and greet the charismatic Captain of the Bangladesh National Football Team Jamal Bhuyan! </p>  
          </Marquee>
        </div>
    );
};

export default UpcomingEvents;