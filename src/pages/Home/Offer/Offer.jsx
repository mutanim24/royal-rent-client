import React from 'react';
import offerImage from "../../../assets/offer.jpg";

const Offer = () => {
    return (
        <div className='relative'>
            <img className="w-full" src={offerImage} alt="" />
            <div className='bg-black bg-opacity-50 p-5 md:p-20 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center'>
                <h1 className='text-xl md:text-4xl w-10/12 text-white text-center md:text-left'>Do You Need To Rent A Car? See Our Offers</h1>
                <button className='btn btn-outline outline-gold text-gold mt-5 md:mt-10 uppercase'>View more</button>
            </div>
        </div>
    );
};

export default Offer;
