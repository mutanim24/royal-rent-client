import React from 'react';
import symbol from "../../../assets/royal symbol.jpg"
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';

const Quality = () => {
    return (
        <div className='p-20'>
            <SectionTitle></SectionTitle>
            <div className='flex gap-12 items-center'>
                <div className='w-3/12'>
                    <img className='h-96 mx-auto' src={symbol} alt="" />
                </div>
                <div className='w-9/12 grid grid-cols-2 gap-8'>
                    <div>
                        <h3 className='text-2xl font-bold text-[#d28d0d] mb-4'>No Delays</h3>
                        <p>No Delays
                            Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-[#d28d0d] mb-4'>No Delays</h3>
                        <p>No Delays
                            Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-[#d28d0d] mb-4'>No Delays</h3>
                        <p>No Delays
                            Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-[#d28d0d] mb-4'>No Delays</h3>
                        <p>No Delays
                            Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;