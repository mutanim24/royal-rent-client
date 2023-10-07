import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='p-20 grid grid-cols-3'>
            <div className='flex gap-4 items-center'>
                <div className='text-[#d28d0d]'>
                    <FaMapMarkerAlt className='text-4xl'></FaMapMarkerAlt>
                </div>
                <div className='text-gray-400 font-bold'>
                    <h2>11 Rue de la Mutualité,</h2>
                    <h2>92400 Paris</h2>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-[#d28d0d]'>
                    <BsHeadset className='text-4xl'></BsHeadset>
                </div>
                <div className='text-gray-400 font-bold'>
                    <h2>Phone: (012) 345 6789 0123</h2>
                    <h2>Email: info@royelrent.com</h2>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-[#d28d0d]'>
                    <AiOutlineClockCircle className='text-4xl'></AiOutlineClockCircle>
                </div>
                <div className='text-gray-400 font-bold'>
                    <h2>Mon-Sat 09:00-23:00</h2>
                    <h2>Sunday Closed</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;