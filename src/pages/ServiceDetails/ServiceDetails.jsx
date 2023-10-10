import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const ServiceDetails = () => {
  const {setCartItems,cartItems}= useContext(AuthContext)
  const [service, setService] = useState([]);

  
  const { id } = useParams();
  const loaderData = useLoaderData();
  
  const addToCart=(id)=>{
    if(cartItems.find(find=> find.id == id)){
      return
    }
    setCartItems([...cartItems,service])
  }
  
  useEffect(() => {
    const findService = loaderData.find((find) => find.id == id);
    setService(findService);
  }, [id, loaderData]);

  const { name, img_url, price,introduction,event_highlights,what_we_do} = service;

  return (
    <div className=" w-full mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* img */}
        <div className="p-5  bg-[#52238a] border-b-2  lg:border-2  border-white">
        <img src={img_url} className="w-full" alt="" />
        </div>

        {/* Section 1 */}
        <div className="flex flex-col justify-center bg-[#52238a] gap-5 p-10 border-b-2 lg:border-2 border-l-0 border-white min-h-[400px] md:min-h-[550px]">
            <h1 className="text-3xl md:text-5xl font-bold ">{name}</h1>
            <p className="text-xl md:text-2xl font-medium">price : {price}</p>
            
            <p className="text-lg md:text-xl md:font-medium">{introduction}</p>

            <button onClick={()=>addToCart(id)} className="btn bg-orange-400 py-5 w-48 border-0 h-auto">Add To Cart List</button>
        </div>

        {/* Section 2 */}
        <div className="bg-[#1b293d] min-h-[400px] md:min-h-[550px] p-10 border-b-2 lg:border-2 border-t-0 border-white">
            <div className="flex flex-col items-center justify-center gap-5 h-full">
            <h1 className="text-2xl md:text-4xl font-medium">What We Do</h1>
            <p className="text-lg md:text-2xl">{what_we_do}</p>
            </div>
        </div>

        {/* Section 3 */}
        <div className="bg-[#1b293d] p-10  lg:border-2 border-t-0 border-l-0 border-white min-h-[400px] md:min-h-[550px]">
        <div className="flex flex-col items-center justify-center gap-5 h-full">
            <h1 className="text-2xl md:text-4xl font-medium">Event Highlights</h1>
            <p className="text-lg md:text-2xl">{event_highlights}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
