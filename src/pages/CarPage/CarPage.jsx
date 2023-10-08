import { useLoaderData } from "react-router-dom";
import { useState } from "react";
// import ReactStars from 'react-rating-star-with-type';
import ReactStars from "react-rating-stars-component";

// import { useForm } from 'react-hook-form';


const CarPage = () => {
    const carDetails = useLoaderData();
    const { _id, brand, model, price_per_hour, rating, description, image } = carDetails;
    // console.log(carDetails)


    const [givenRating, setGivenRating] = useState(4); // Initial rating value

    const ratingChanged = (newRating) => {
        setGivenRating(newRating); // Updates the rating state variable with the selected value
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const name = form.name.value;
        const email = form.email.value;
        const city = form.city.value;
        const id = _id;


        
        console.log(comment, name, email, city, givenRating, id)
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
                            edit={false}
                            size={24}
                            activeColor="#d28d0d"
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
                    <div className="flex items-center gap-3">
                        {/* <label htmlFor="rating" className="text-[#d28d0d]">Rate:</label> */}
                        {/* <input
                            id="rating"
                            type="number"
                            placeholder="Rating (1-5)"
                            className="input input-bordered w-16"
                            min="1"
                            max="5"
                            value={rating}
                            onChange={handleRatingChange}
                            required
                        /> */}
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

                    <textarea
                        className="textarea w-full textarea-bordered"
                        placeholder="Your Comment*"
                        name="comment"
                        required
                    ></textarea>
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
    );
};

export default CarPage;