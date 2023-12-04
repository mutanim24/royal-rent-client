import { Link } from "react-router-dom";


const CardForCar = ({ car }) => {
    const { _id, images, brand, price_per_hour, model, description } = car;
    // console.log(car.images[0])
    return (
        
        <Link to={`/car/${_id}`} className="group relative shadow-lg overflow-hidden">
        {/* Image */}
        <img src={images[0]} alt="" className="w-full h-72" />

        {/* Text overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform">
            <div className="text-white text-left">
                <h2 className="text-3xl font-bold mb-3">{brand}</h2>
                <h2 className="text-xl font-semibold text-[#d28d0d]">{model}</h2>
                <p className="my-3 text-base font-thin">
                    from
                    <span className="text-3xl text-[#d28d0d]"> ${price_per_hour}/h</span>
                </p>
            </div>
        </div>
    </Link>
    );
};

export default CardForCar;