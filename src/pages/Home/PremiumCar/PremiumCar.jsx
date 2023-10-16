import React from 'react';
import premium1 from '../../../assets/premium 1.jpg';
import premium2 from '../../../assets/premium 2.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PremiumCar = () => {
    return (
        <div className='grid md:grid-cols-2 md:gap-10 p-10 md:p-20'>
            <div className='grid md:grid-cols-2 gap-6'>
                <img className="object-cover w-full" src={premium1} alt="Premium Car 1" />
                <img className="object-cover w-full" src={premium2} alt="Premium Car 2" />
            </div>
            <div className='md:mt-5 mt-6'>
                <SectionTitle
                    title="Premium Cars Rental"
                    subtitle="ONLY THE BEST"
                />
                <p className="mt-4 md:mt-8">Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae dipiscing.</p>
                <div className='flex flex-row gap-20 items-center mt-8 md:mt-12'>
                    <div className='text-center'>
                        <h5 className="text-4xl md:text-5xl font-bold"><span>21</span>+</h5>
                        <p className='text-[#d28d0d]'>Years of experience</p>
                    </div>
                    <div className='text-center md:w-1/2'>
                        <h5 className="text-4xl md:text-5xl font-bold"><span>15</span>k</h5>
                        <p className='text-[#d28d0d]'>Satisfied clients</p>
                    </div>
                </div>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-8 md:mt-10 uppercase'>Book Now</button>
            </div>
        </div>
    );
};

export default PremiumCar;
