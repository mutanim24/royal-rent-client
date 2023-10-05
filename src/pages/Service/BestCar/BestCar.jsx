import React from 'react';
import bestCar from '../../../assets/best car.jpg'
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';
import { AiFillCheckCircle } from 'react-icons/ai';


const BestCar = () => {
    return (
        <div className='p-20 flex gap-10 justify-center items-center'>
            <img src={bestCar} className="w-6/12" alt="" />
            <div className='w-6/12'>
                <SectionTitle
                title='Best Car Rental Services'
                subtitle='SUPERB VEHICLES'
                ></SectionTitle>
                <p>Turpis tincidunt id aliquet risus feugiat in ante metus dictum sedo. Netus et done malesu ada fames ac turpis. Netus et sed mal a.</p>
                <div className='mt-8'>
                    <ul className='text-white space-y-2 grid grid-cols-2'>
                        <li className='flex gap-2 items-center'><AiFillCheckCircle className='text-[#d28d0d]'></AiFillCheckCircle>Leo urna molestie at elem</li>
                        <li className='flex gap-2 items-center'><AiFillCheckCircle className='text-[#d28d0d]'></AiFillCheckCircle>Leo urna molestie at elem</li>
                        <li className='flex gap-2 items-center'><AiFillCheckCircle className='text-[#d28d0d]'></AiFillCheckCircle>Leo urna molestie at elem</li>
                        <li className='flex gap-2 items-center'><AiFillCheckCircle className='text-[#d28d0d]'></AiFillCheckCircle>Leo urna molestie at elem</li>
                        <li className='flex gap-2 items-center'><AiFillCheckCircle className='text-[#d28d0d]'></AiFillCheckCircle>Leo urna molestie at elem</li>
                        <li className='flex gap-2 items-center'><AiFillCheckCircle className='text-[#d28d0d]'></AiFillCheckCircle>Leo urna molestie at elem</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BestCar;