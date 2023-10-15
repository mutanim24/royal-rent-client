import React from 'react';
// import bannerImage from "../../assets/inner-p-img-1.jpg"
// import bannerImage2 from "../../assets/home-2-img-background.jpg"
import PricingCard from '../PricingCard/PricingCard';
import Contact from '../../Home/Contact/Contact';
import PageBanner from '../../../components/PageBanner/PageBanner';
import SaveMoney from '../SaveMoney/SaveMoney';


const Pricing = () => {
    return (
        <div className='bg-[#1f2937] text-white'>
            <PageBanner bannerTitle="pricing"></PageBanner>
            <PricingCard></PricingCard>
            <SaveMoney></SaveMoney>
            <Contact></Contact>
        </div>
    );
};

export default Pricing;