import React from 'react';
import premium1 from '../../../assets/premium 1.jpg';
import premium2 from '../../../assets/premium 2.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PremiumCar = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-10 p-10 md:p-20'>
            <div className="md:pr-12 lg:pr-20">
                <SectionTitle
                    title="Our Satisfied Clients All Around The Globe"
                    subtitle="ONLY THE BEST"
                />
                <p className="mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg">Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae dipiscing.</p>
                <div className='flex  md:flex-row items-center justify-between mt-6 md:mt-8 lg:mt-10 gap-8 md:space-y-0 md:space-x-20'>
                    <div className='text-center'>
                        <h5 className="text-3xl md:text-5xl font-bold"><span>21</span>+</h5>
                        <p className='text-[#d28d0d] text-sm md:text-base'>Years of experience</p>
                    </div>
                    <div className='text-center'>
                        <h5 className="text-3xl md:text-5xl font-bold"><span>15</span>k</h5>
                        <p className='text-[#d28d0d] text-sm md:text-base'>Satisfied clients</p>
                    </div>
                </div>
                <button className='mt-8 md:mt-10 bg-transparent hover:bg-[#d28d0d] text-[#d28d0d] hover:text-white border border-[#d28d0d] hover:border-transparent py-2 px-4 md:py-3 md:px-6 rounded uppercase text-sm md:text-base'>
                    Book Now
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-0'>
                <img src={premium1} alt="premium 1" className="w-full h-full object-cover" />
                <img src={premium2} alt="premium 2" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default PremiumCar;
