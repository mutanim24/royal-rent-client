import { Link } from "react-router-dom";

const CardForCar = ({ car }) => {
    const {_id, image, brand, price_per_hour, description} = car;
    return (
        <Link to={`car/${_id}`} className="group relative shadow-lg overflow-hidden">
            {/* Image */}
            <img src={image} alt="" className="w-full h-72" />

            {/* Text overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex items-end justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-white p-10">
                    <h2 className="text-2xl font-semibold">{brand}</h2>
                    <p className="my-3">
                        from
                        <span className="text-3xl text-[#d28d0d]">
                            {price_per_hour}$
                        </span>
                        /hour
                    </p>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardForCar;