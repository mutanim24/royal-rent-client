import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Chauffeurs1 from "../../../assets/Chauffeurs 1.jpg";
import Chauffeurs2 from "../../../assets/Chauffeurs 2.jpg";
import Chauffeurs3 from "../../../assets/Chauffeurs 3.jpg";
import Chauffeurs4 from "../../../assets/chauffer 44.jpg";
import { BsPhone, BsPhoneLandscape, BsTelephoneInbound } from 'react-icons/bs';

const Chauffeurs = () => {
    return (
        <div className='p-20'>
            <SectionTitle></SectionTitle>
            <div className='grid grid-cols-4 gap-7'>
                <div className=' bg-black p-5 rounded text-center'>
                    <img className='h-44 w-44 border border-2 border-[#d28d0d] p-3 rounded-full mx-auto' src={Chauffeurs1} alt="" />
                    <div className='text-center mt-4'>
                        <h4>Marco Watkivi</h4>
                        <div className='text-[#d28d0d] flex justify-center mt-2 items-center gap-2'> <BsTelephoneInbound></BsTelephoneInbound> <a href="tel">+8801746468746</a></div>
                    </div>
                </div>
                <div className=' bg-black p-5 rounded text-center'>
                    <img className='h-44 w-44 border border-2 border-[#d28d0d] p-3 rounded-full mx-auto' src={Chauffeurs2} alt="" />
                    <div className='text-center mt-4'>
                        <h4>Henri Jam</h4>
                        <div className='text-[#d28d0d] flex justify-center mt-2 items-center gap-2'> <BsTelephoneInbound></BsTelephoneInbound> <a href="tel">+8801746468746</a></div>
                    </div>
                </div>
                <div className=' bg-black p-5 rounded text-center'>
                    <img className='h-44 w-44 border border-2 border-[#d28d0d] p-3 rounded-full mx-auto' src={Chauffeurs3} alt="" />
                    <div className='text-center mt-4'>
                        <h4>Wikipia jency</h4>
                        <div className='text-[#d28d0d] flex justify-center mt-2 items-center gap-2'> <BsTelephoneInbound></BsTelephoneInbound> <a href="tel">+8801746468746</a></div>
                    </div>
                </div>
                <div className=' bg-black p-5 rounded text-center'>
                    <img className='h-44 w-44 border border-2 border-[#d28d0d] p-3 rounded-full mx-auto' src={Chauffeurs4} alt="" />
                    <div className='text-center mt-4'>
                        <h4>David Jack</h4>
                        <div className='text-[#d28d0d] flex justify-center mt-2 items-center gap-2'> <BsTelephoneInbound></BsTelephoneInbound> <a href="tel">+8801746468746</a></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chauffeurs;