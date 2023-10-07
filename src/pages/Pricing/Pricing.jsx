import React from 'react';
import bannerImage from "../../assets/inner-p-img-1.jpg"
import bannerImage2 from "../../assets/home-2-img-background.jpg"
import PricingCard from './PricingCard/PricingCard';
import Contact from '../Home/Contact/Contact';


const Pricing = () => {
    return (
        <div className='bg-[#1f2937] text-white'>
            <div className="bg-cover flex items-center justify-center bg-center h-64 md:h-96 mb-20" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="text-white text-4xl font-bold  text-center p-5">
                    Pricing
                </div>
            </div>
            <PricingCard></PricingCard>
            <div className="bg-cover flex items-center bg-center h-64 md:h-96" style={{ backgroundImage: `url(${bannerImage2})` }}>
                <div className="text-white text-center p-5">
                    <h2 className='text-4xl font-bold '>Save Money With Our Rental</h2>
                    <p className='mt-4'>PHONE: (012) 345 6789 0123;</p>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Pricing;