const CartCard = ({item}) => {
    const {img_url,name,price}= item;
  return (
    <div>
      <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex justify-center items-center">

        <img src={img_url} className="h-[250px] mx-auto" alt="" />
            </div>
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg font-medium text-orange-600">Price: {price}</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartCard;
