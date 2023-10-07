import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type';
// import { useForm } from 'react-hook-form';


const CarPage = () => {
    const carDetails = useLoaderData();
    const { _id, brand, model, price_per_hour, rating, description, image } = carDetails;
    // console.log(carDetails)


    const handleSubmit = (event)=> {
        event.preventDefault();
        const form  = event.target;
        const comment = form.comment.value;
        const name = form.name.value;
        const email = form.email.value;
        const id = _id;


        // console.log(comment, name, email, id)
    }
    return (
        <div>
            <div className="p-20 grid grid-cols-2 gap-10 items-center">
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
                    <button className='mt-20 btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>


                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-[#d28d0d] mb-6">Leave your comment</h2>
                <form onSubmit={handleSubmit} className="bordered w-6/12 space-y-5">
                    <textarea
                        className="textarea w-full textarea-bordered"
                        placeholder="Your Comment*"
                        // required
                        name="comment"
                    ></textarea>
                    <br />
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="input input-bordered w-full"
                            // required
                            name="name"
                            
                        />

                        <input
                            type="Email"
                            placeholder="Email*"
                            className="input input-bordered w-full"
                            // required
                            name="email"
                           
                        />
                    </div>
                    <br />
                    <input className="btn btn-outline outline-[#d28d0d] text-[#d28d0d] uppercase" type="submit" value="Post Comment" />
                </form>
            </div>
        </div>
    );
};

export default CarPage;