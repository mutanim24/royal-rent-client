import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'

const CarPage = () => {
    const carDetails = useLoaderData();
    const { brand, model, price_per_hour, rating, description, image } = carDetails;
    console.log(carDetails)



    return (
        <div className="p-20 grid grid-cols-2 gap-10">
            <div>
                <img className="rounded shadow-lg" src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h1 className="text-5xl font-bold">{brand}</h1>
                <h3 className="text-2xl font-semibold">{model}</h3>
                <div className="flex gap-2">
                    <ReactStars

                        value={rating}
                        edit={true}
                        activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                    />
                    <h2>{rating}</h2>
                </div>
                <h1 className="text-2xl">from <span className="text-4xl font-bold text-[#d28d0d]">{price_per_hour}/h</span></h1>
                <p>{description}</p>
                <button className='mt-20 btn btn-outline outline-[#d28d0d] text-[#d28d0d]  uppercase'>Book Now</button>


            </div>
        </div>
    );
};

export default CarPage;