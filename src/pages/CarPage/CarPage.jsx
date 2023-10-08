import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type';
// import { useForm } from 'react-hook-form';


const CarPage = () => {
    const carDetails = useLoaderData();
    const { _id, brand, model, price_per_hour, rating, description, image } = carDetails;
    // console.log(carDetails)


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const name = form.name.value;
        const email = form.email.value;
        const id = _id;
        // console.log(comment, name, email, id)
    }

    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const tripType = form.tripType.value;
        const brand = form.brand.value;
        const number = form.number.value;
        const date = form.date.value;
        const time = form.time.value;
        const special = form.special.value;
        console.log(name,email,phone,tripType,brand,number,date,time,special)
        
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

                    {/* Modal */}
                    <label htmlFor="my_modal_7" className="btn btn-outline outline-[#d28d0d] text-[#d28d0d] uppercase">Book Now</label>
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-9/12 max-w-5xl bg-[#1f2937] text-white">
                            <form action="" onSubmit={handleBook}>
                                <div className="flex mx-auto gap-4">
                                    <div className="form-control w-1/2">
                                        <input type="text" required placeholder="Name" name="name" className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <input type="email" required placeholder="Email" name="email" className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                </div>
                                <div className="flex mx-auto mt-4 gap-4">
                                    <div className="form-control w-1/2">
                                        <input type="tel" required placeholder="Phone" name="phone" className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <select name="tripType" className="select bg-transparent border-b-yellow-600 text-black">
                                            <option disabled >Trip Type</option>
                                            <option>Default</option>
                                            <option>Per Hour</option>
                                            <option>Per Day</option>
                                            <option>One-time</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex mx-auto mt-4 gap-4">
                                    <div className="form-control w-1/2">
                                        <input type="" name="brand" required defaultValue={brand} className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <input type="number" required placeholder="No. Of passengers" name="number" className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                </div>
                                <div className="flex mx-auto mt-4 gap-4">
                                    <div className="form-control w-1/2">
                                        <input type="date" required placeholder="Select Date" name="date" className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <input type="time" required placeholder="Select Time" name="time" className="input input-bordered bg-transparent border-b-yellow-600" />
                                    </div>
                                </div>
                                <div className="form-control mt-5">
                                    <textarea placeholder="Special Request" name="special" className="textarea textarea-bordered bg-transparent border-b-yellow-600"></textarea>
                                </div>
                                <input className="mt-5 btn btn-outline outline-[#d28d0d] text-[#d28d0d] uppercase" type="submit" value="Book Now" />
                            </form>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
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