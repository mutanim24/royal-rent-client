import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Value = () => {
    return (
        <div className='p-5 md:p-20'>
            <SectionTitle
                title={"We Value Our Clients And Want Them To Have A Nice Experience"}
                subtitle={"FINEST TRANSPORT"}
            ></SectionTitle>
            <div className='w-full sm:w-4/6 mx-auto'>
                <div className='flex flex-col sm:flex-row justify-between gap-8'>
                    <div className='mb-4 p-6 flex-1'>
                        <h1 className='text-2xl mb-3'>Clean & Comfortable</h1>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div className='mb-4 p-6 flex-1'>
                        <h1 className='text-2xl mb-3'>Best Price Is Assured</h1>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between gap-8'>
                    <div className='mb-4 p-6 flex-1'>
                        <h1 className='text-2xl mb-3'>Smooth Car Transport</h1>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                    <div className='mb-4 p-6 flex-1'>
                        <h1 className='text-2xl mb-3'>Diverse Selection</h1>
                        <p>Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Value;
