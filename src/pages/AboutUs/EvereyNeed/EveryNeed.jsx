import React from 'react';
import img from "../../../assets/inner-ab-img-3.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const EveryNeed = () => {
    return (
        <div className='flex flex-col-reverse sm:flex-row justify-between gap-10 w-full mt-20'>
            <div className='w-full sm:w-1/2 p-10'>
                <SectionTitle
                    title={"For Your Every Need"}
                    subtitle={"ONLY THE BEST"}
                ></SectionTitle>
                <p>Praesent elementum facilisis leo vel fringilla est. Vestibulum lectus a urise ultrices eros in cursus.</p>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View More</button>
                <div className='flex gap-20 items-center mt-6'>
                    <div className='text-center'>
                        <h5><span className='text-5xl font-bold'>21</span>+</h5>
                        <p className='text-[#d28d0d]'>Years of experience</p>
                    </div>
                    <div className='text-center'>
                        <h5><span className='text-5xl font-bold'>15</span>k</h5>
                        <p className='text-[#d28d0d]'>Satisfied clients</p>
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <img src={img} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default EveryNeed;
