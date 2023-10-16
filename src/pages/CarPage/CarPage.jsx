import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

import Swal from "sweetalert2";
// import { useForm } from 'react-hook-form';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarPage.css"
// import { comment } from "postcss";



const CarPage = () => {
    const carDetails = useLoaderData();
    const { _id, brand, model, price_per_hour, rating, description, images, features } = carDetails;
    // console.log(carDetails)

    // const [givenRating, setGivenRating] = useState(4); // Initial rating value
    const [recentComment, setRecentComment] = useState([]);
    const [ratings, setRatings] = useState(4); // Initial rating value

    const ratingChanged = (newRating) => {
        setRatings(newRating); // Updates the rating state variable with the selected value
    };

    // for comment form
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const name = form.name.value;
        const email = form.email.value;
        const city = form.city.value;

        const allComment = { _id, name, email, comment, city, ratings, brand }
        fetch("https://royal-rent-server.vercel.app/comment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allComment)
        }).then(res => res.json())
            .then(data => console.log(data))

        // console.log(comment, name, email, city, givenRating, id)
    }
    // for booking
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
        const booking = { name, email, phone, tripType, brand, number, date, time, special };
        console.log(booking);
        fetch("https://royal-rent-server.vercel.app/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Booking Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    useEffect(() => {
        fetch("https://royal-rent-server.vercel.app/comment")
            .then(res => res.json())
            .then(data => setRecentComment(data))
    }, [])
    // console.log(recentComment)

    return (
        <div className="mb-16">
            {/* single page data */}
            <div className="p-20 grid grid-cols-2 gap-10 items-center">
                <Carousel>
                    <img className="rounded shadow-lg" src={images[0]} alt="" />
                    <img className="rounded shadow-lg" src={images[1]} alt="" />
                    <img className="rounded shadow-lg" src={images[2]} alt="" />
                    <img className="rounded shadow-lg" src={images[3]} alt="" />
                </Carousel>
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">{brand}</h1>
                    <h3 className="text-2xl font-semibold">{model}</h3>
                    <div className="flex gap-2 items-center">
                        <ReactStars
                            value={rating}
                            edit={false}
                            size={24}
                            activeColor="#d28d0d"
                            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                        />
                        <h2>{rating}</h2>
                    </div>
                    <h1 className="text-2xl">from <span className="text-4xl font-bold text-[#d28d0d]">${price_per_hour}/h</span></h1>
                    {/* <p>{description}</p> */}
                    <div className="text-base grid grid-cols-2 gap-2 w-8/12">
                        {
                            features.map((feature, index) => <p key={index} className="border-black border rounded-full text-center p-1 text-sm">{feature}</p>)
                        }
                    </div>

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

            {/* comment form */}
            <div className="px-20 w-10/12 space-y-10">
                <div>
                    <h2 className="text-3xl font-bold text-black mb-6">{brand} Overview</h2>
                    <p className="border-t-2 pt-4 border-black">{description}</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-black mb-6">Recent Comment</h2>
                    <div className="border-t-2 pt-4 border-black">
                        {
                            recentComment.slice(0, 3).map(cmt => <div key={cmt._id} className="flex  justify-center items-start gap-4 mb-7">
                                <div className="w-2/12 h-28  border-2 rounded-full"></div>
                                <div className="w-10/12 text-black">
                                    <ReactStars
                                        value={cmt.ratings}
                                        edit={false}
                                        size={24}
                                        activeColor="#d28d0d"
                                        activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                                    />
                                    <h2 className="text-xl font-bold">{cmt.name}</h2>
                                    <p>{cmt.comment}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-black mb-6">Leave your comment</h2>
                    <form onSubmit={handleSubmit} className="bordered w-8/12 space-y-5 border-t-2 pt-4 border-black">
                        <div className="flex items-center gap-3">

                            <ReactStars
                                count={5}
                                size={44}
                                activeColor="#d28d0d"
                                value={4}
                                edit={true}
                                onChange={ratingChanged}
                                required
                            />
                        </div>


                        {/* <br /> */}
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="input input-bordered w-full"
                                name="name"
                                required

                            />
                            <input
                                type="Email"
                                placeholder="Email*"
                                className="input input-bordered w-full"
                                name="email"
                                required

                            />
                        </div>
                        {/* <br /> */}
                        <textarea
                            rows={4}
                            className="textarea w-full textarea-bordered"
                            placeholder="Your Comment*"
                            name="comment"
                            required
                        ></textarea>
                        <div className="relative">
                            <select
                                className="input input-bordered w-full"
                                // onChange={handleCityChange}
                                // value={city}
                                name="city"
                                required
                            >
                                <option value="" disabled>Select your city*</option>
                                <option value="Dallas, New York">Dallas, New York</option>
                                <option value="Calfornia, New York">Calfornia, New York</option>
                                <option value="Las Vefas, New York">Las Vefas, New York</option>
                                <option value="Cikago, New York">Cikago, New York</option>
                                <option value="Lose Angels, New York">Lose Angels, New York</option>
                                <option value="Austin, New York">Austin, New York</option>
                            </select>
                        </div>
                        <br />
                        <input
                            className="btn btn-outline outline-[#d28d0d] text-[#d28d0d] uppercase"
                            type="submit"
                            value="Post Comment"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CarPage;