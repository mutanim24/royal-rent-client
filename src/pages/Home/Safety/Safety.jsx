import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import quality1 from '../../../assets/quality 1.jpg';
import quality2 from '../../../assets/quality 2.jpg';

const Safety = () => {
    return (
        <div className='md:flex justify-between gap-5 md:gap-10 p-10 md:p-20 items-center flex-col-reverse md:flex-row'>
            <div className="md:pr-10">
                <SectionTitle
                    title="We Take Care Of Your Safety And Convenience"
                    subtitle="PREMIUM DRIVERS"
                ></SectionTitle>
                <p className="text-sm md:text-base">Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae dipiscing.</p>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-5 md:mt-10 uppercase'>Book Now</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-0'>
                <img className="w-full h-full object-cover" src={quality1} alt="" />
                <img className="w-full h-full object-cover" src={quality2} alt="" />
            </div>
        </div>

    );
};

export default Safety;
