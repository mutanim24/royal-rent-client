import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import PremiumCar from '../PremiumCar/PremiumCar';
import BestCar from '../BestCar/BestCar';
import Contact from '../../Home/Contact/Contact';

const ServicePage = () => {
    return (
        <div  className="bg-[#1f2937] text-white">
            <Banner></Banner>
            <AllServices></AllServices>
            <PremiumCar></PremiumCar>
            <BestCar></BestCar>
            <Contact></Contact>
        </div>
    );
};

export default ServicePage;