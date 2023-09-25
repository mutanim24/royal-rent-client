import React from 'react';
import offerImage from "../../../assets/offer.jpg"

const Offer = () => {
    return (
        <div className='relative'>
            <img src={offerImage} alt="" />
            <div className='bg-black bg-opacity-50 p-20 absolute top-0 bottom-0 left-0 right-0 flex-col items-center justify-center'>
                <h1 className='text-4xl w-6/12'>Do You Need To Rent A Car? See Our Offers</h1>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
            </div>
        </div>
    );
};

export default Offer;