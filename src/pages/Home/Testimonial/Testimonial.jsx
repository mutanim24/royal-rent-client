import React from 'react';
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';
import ReactStars from "react-rating-stars-component";


const Testimonial = () => {
    return (
        <div className='p-20'>
            <SectionTitle></SectionTitle>
            <div className='grid grid-cols-3 gap-6'>
                <div className='p-3 border-l-2 space-y-2'>
                    <h3 className='text-2xl font-semibold'>Arman Malik</h3>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#d28d0d"
                        value={4}
                        edit={false}

                    />
                    <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sequi necessitatibus soluta ab possimus nostrum cupiditate, amet dicta, voluptas non ipsa reprehenderit optio dignissimos dolores ea doloremque ratione? Ea quidem architecto, enim alias magnam ab illum quam repellat labore perferendis?</p>
                    <h5 className='text-[#d28d0d]'>Dallas, New York</h5>
                </div>
                <div className='p-3 border-l-2 space-y-2'>
                    <h3 className='text-2xl font-semibold'>Arman Malik</h3>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#d28d0d"
                        value={4}
                        edit={false}

                    />
                    <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sequi necessitatibus soluta ab possimus nostrum cupiditate, amet dicta, voluptas non ipsa reprehenderit optio dignissimos dolores ea doloremque ratione? Ea quidem architecto, enim alias magnam ab illum quam repellat labore perferendis?</p>
                    <h5 className='text-[#d28d0d]'>Dallas, New York</h5>
                </div>
                <div className='p-3 border-l-2 space-y-2'>
                    <h3 className='text-2xl font-semibold'>Arman Malik</h3>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#d28d0d"
                        value={4}
                        edit={false}

                    />
                    <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sequi necessitatibus soluta ab possimus nostrum cupiditate, amet dicta, voluptas non ipsa reprehenderit optio dignissimos dolores ea doloremque ratione? Ea quidem architecto, enim alias magnam ab illum quam repellat labore perferendis?</p>
                    <h5 className='text-[#d28d0d]'>Dallas, New York</h5>
                </div>
                
            </div>
        </div>
    );
};

export default Testimonial;