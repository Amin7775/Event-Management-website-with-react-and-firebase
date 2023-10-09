import ServicesCard from "./ServicesCard";


const Services = ({events}) => {
    console.log("from services",events)
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-bold">Our Services</h1>

            <div className="my-10 grid grid-cols-3 gap-10">
                    {
                        events.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                    }
            </div>
        </div>
    );
};

export default Services;