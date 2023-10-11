import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Root = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    return (
        <div className="font-poppins">
            <div>
            <Navbar></Navbar>
            </div>
            <div className="min-h-[60vh] z-0">
            <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>

            </div>
        </div>
    );
};

export default Root;