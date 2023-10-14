import React from 'react';
import premium1 from '../../../assets/premium 1.jpg';
import premium2 from '../../../assets/premium 2.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PremiumCar = () => {
    return (
        <div className='grid grid-cols-2 gap-10 p-20'>

            <div>
                <SectionTitle
                    title="Our Satisfied Clients All Around The Globe"
                    subtitle="ONLY THE BEST"
                ></SectionTitle>
                <p>Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae dipiscing.</p>
                <div className='flex gap-20 items-center mt-5'>
                    <div className='text-center'>
                        <h5><span className='text-5xl font-bold'>21</span>+</h5>
                        <p className='text-[#d28d0d]'>Years of experience</p>
                    </div>
                    <div className='text-center'>
                        <h5><span className='text-5xl font-bold'>15</span>k</h5>
                        <p className='text-[#d28d0d]'>Satisfied clients</p>
                    </div>
                </div>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <img src={premium1} alt="" />
                <img src={premium2} alt="" />
            </div>

        </div>
    );
};

export default PremiumCar;