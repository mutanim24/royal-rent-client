import React from 'react';
import bannerImage2 from "../../../assets/home-2-img-background.jpg"


const SaveMoney = () => {
    return (
        <div className="bg-cover flex items-center bg-center h-64 md:h-96" style={{ backgroundImage: `url(${bannerImage2})` }}>
            <div className="text-white text-center p-5">
                <h2 className='text-4xl font-bold '>Save Money With Our Rental</h2>
                <p className='mt-4'>PHONE: (012) 345 6789 0123;</p>
            </div>
        </div>
    );
};

export default SaveMoney;