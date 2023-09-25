import React from 'react';
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';

const Option = () => {
    return (
        <div className='p-20'>
            <SectionTitle></SectionTitle>
            <div className='flex'>
                <div className='w-2/12'></div>
                <div className='w-10/12'>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Premium</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$45</span>/h</h5>
                        </div>
                        <div>
                            <ul className='text-gray-400'>
                                <li>Leo urna molestie at elem</li>
                                <li>Leo urna molestie at elem</li>
                                <li>Leo urna molestie at elem</li>
                            </ul>
                        </div>
                        <div>
                            <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Premium</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$45</span>/h</h5>
                        </div>
                        <div>
                            <ul>
                                <li>Leo urna molestie at elem</li>
                                <li>Leo urna molestie at elem</li>
                                <li>Leo urna molestie at elem</li>
                            </ul>
                        </div>
                        <div>
                            <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Premium</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$45</span>/h</h5>
                        </div>
                        <div>
                            <ul>
                                <li>Leo urna molestie at elem</li>
                                <li>Leo urna molestie at elem</li>
                                <li>Leo urna molestie at elem</li>
                            </ul>
                        </div>
                        <div>
                            <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Option;