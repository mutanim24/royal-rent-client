import React from 'react';
import symbol from "../../../assets/royal symbol.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Quality = () => {
    return (
        <div className='px-10 md:px-20'>
            <SectionTitle
                title="Ride To Destinations With Maximum Comfort"
                subtitle="FINEST TRANSPORT"
            ></SectionTitle>
            <div className='flex flex-col md:flex-row gap-5 md:gap-12 items-center'>
                <div className='w-full md:w-3/12'>
                    <img className='h-72 md:h-96 mx-auto' src={symbol} alt="" />
                </div>
                <div className='w-full md:w-9/12 grid grid-cols-1 md:grid-cols-2 md:p-0 p-5 gap-8'>
                    <div>
                        <h3 className='text-xl md:text-2xl font-bold text-gold mb-4'>No Delays</h3>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div>
                        <h3 className='text-xl md:text-2xl font-bold text-gold mb-4'>High Quality</h3>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div>
                        <h3 className='text-xl md:text-2xl font-bold text-gold mb-4'>Premium Support</h3>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div>
                        <h3 className='text-xl md:text-2xl font-bold text-gold mb-4'>A Diverse Selection</h3>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;
