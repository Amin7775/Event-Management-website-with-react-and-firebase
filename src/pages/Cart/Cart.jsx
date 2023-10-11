import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import CartCard from "./CartCard";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Cart = () => {
  const { cartItems } = useContext(AuthContext);
  useEffect(()=>{
    Aos.init();
  },[])
  console.log(cartItems);
  return (
    <div data-aos="fade-down" data-aos-duration="1000" style={{ backgroundColor: "#e5f1fe" }} className="min-h-screen">
      <div className="max-w-[1440px] mx-auto h-full">
        <h1 className="text-4xl font-bold pt-10 text-center">Cart List</h1>
        <h1 className="text-3xl font-semibold mt-5 text-center">Selected Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-10 md:px-5 lg:px-0">
            {
                cartItems.map(item => <CartCard key={item.key} item={item}></CartCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Cart;
