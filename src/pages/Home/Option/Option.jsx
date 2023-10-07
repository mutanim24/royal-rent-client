import React from 'react';
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';
import { AiFillCheckCircle } from 'react-icons/ai';


const Option = () => {
    return (
        <div className='p-20'>
            <SectionTitle
            title="A High Variety Of Options"
            subtitle="BEST POSSIBILITIES"
            ></SectionTitle>
            <div className='flex'>
                <div className='w-2/12'></div>
                <div className='w-10/12'>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Premium</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$40</span>/h</h5>
                        </div>
                        <div>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>

                            </ul>
                        </div>
                        <div>
                            <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Super</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$50</span>/h</h5>
                        </div>
                        <div>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>

                            </ul>
                        </div>
                        <div>
                            <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Luxury</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$70</span>/h</h5>
                        </div>
                        <div>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>

                            </ul>
                        </div>
                        <div>
                            <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-8 border-b p-10'>
                        <div>
                            <h3 className='text-3xl font-bold'>Business</h3>
                            <h5 className='text-[#d28d0d]'>from <span className='text-4xl font-semibold'>$100</span>/h</h5>
                        </div>
                        <div>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><AiFillCheckCircle></AiFillCheckCircle>Leo urna molestie at elem</li>

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