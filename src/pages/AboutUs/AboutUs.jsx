import React from 'react';
import bannerImage from "../../assets/inner-ab-img-1.jpg"
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import Contact from '../Home/Contact/Contact';
import Gallery from './Gallery/Gallery';
import EveryNeed from './EvereyNeed/EveryNeed';
import Comfort from './Comfort/Comfort';
import Value from './Value/Value';
import Ride from './Ride/Ride';

const AboutUs = () => {
    return (
        <div className='bg-[#1f2937] text-white'>

            <div className="bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: `url(${bannerImage})` }}>
                {/* <div className="text-white text-2xl font-semibold text-center p-4">
                   About US
                </div> */}
            </div>
            <Value></Value>

            <div className="bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: `url(${bannerImage})` }}>
                {/* <div className="text-white text-2xl font-semibold text-center p-4">
                   About US
                </div> */}
            </div>
            <Ride></Ride>
            <Comfort></Comfort>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
            <Gallery></Gallery>
            <EveryNeed></EveryNeed>
            <Contact></Contact>
        </div>

    );
};

export default AboutUs;