import React from 'react';
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';
import quality1 from '../../../assets/quality 1.jpg';
import quality2 from '../../../assets/quality 2.jpg';

const Safety = () => {
    return (
        <div className='grid grid-cols-2 gap-10 p-20'>
            <div>
                <SectionTitle></SectionTitle>
                <p>Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae dipiscing.</p>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <img src={quality1} alt="" />
                <img src={quality2} alt="" />
            </div>
        </div>
    );
};

export default Safety;