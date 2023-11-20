import React from 'react';
import bannerImage from "../../../assets/inner-ab-img-1.jpg"
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import Contact from '../../Home/Contact/Contact';
import Gallery from '../Gallery/Gallery';
import EveryNeed from '../EvereyNeed/EveryNeed';
import Comfort from '../Comfort/Comfort';
import Value from '../Value/Value';
import PageBanner from '../../../components/PageBanner/PageBanner';

const AboutUs = () => {
    return (
        <div className='bg-[#1f2937] text-white'>

           <PageBanner bannerTitle="about us"></PageBanner>
            <Value></Value>
            <div className="bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: `url(${bannerImage})` }}>
                
            </div>
            <Comfort></Comfort>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
            <Gallery></Gallery>
            <EveryNeed></EveryNeed>
            <Contact></Contact>
        </div>

    );
};

export default AboutUs;