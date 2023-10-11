import { useLoaderData } from "react-router-dom";
import AboutUsCard from "./AboutUsCard";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(()=>{
    Aos.init();
  },[])

    const team = useLoaderData();
  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="max-w-[1440px] mx-auto">
      <h1 className="text-center text-5xl font-bold my-5">About Us</h1>
      <p className="p-5 lg:p-0 text-lg">
        At Footevents, our love for football fuels our mission to bring the
        excitement of the beautiful game to life in unforgettable ways. With a
        deep passion for football, we've evolved into a leading event management
        team dedicated to connecting fans, players, and communities.
        <br />
        <br />
        Our journey began with a shared vision to celebrate football in all its
        glory. Today, we stand as a team of dedicated professionals who excel at
        organizing a diverse range of football-related events, from grassroots
        youth tournaments to prestigious awards galas. We take immense pride in
        our ability to not only entertain but also leave a lasting impact on
        participants and attendees. What sets us apart is our unwavering
        commitment to delivering exceptional quality, creativity, and a sense of
        belonging to the football community.
        <br />
        <br />
        As football enthusiasts ourselves, we understand the sport's power to
        unite people, inspire greatness, and create cherished memories. This
        understanding drives us to innovate continuously, ensuring that we offer
        a wide array of football events and experiences catering to fans of all
        ages and backgrounds. Join us on this exciting journey as we continue to
        celebrate the world of football and create moments that resonate.
        Whether you're a devoted supporter, an aspiring player, or a corporate
        partner, Footevents is your trusted companion in bringing the magic of
        football to life.
      </p>
    
    <h2 className="text-center text-4xl font-bold mt-10 mb-5">Our Team</h2>

    <div className="grid grid-cols-1  lg:grid-cols-3 my-10 p-5 md:px-28 lg:p-2 md:gap-5 gap-10">
        {
            team.map(member=> <AboutUsCard key={member.id} member={member}></AboutUsCard>)
        }
    </div>

    </div>
  );
};

export default AboutUs;
