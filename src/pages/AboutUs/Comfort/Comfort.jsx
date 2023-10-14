import React from 'react';
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';
import img from "../../../assets/inner-ab-img-2.jpg"

const Comfort = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-10 w-full my-20'>
            <div className='w-full sm:w-1/2'>
                <img src={img} alt="" className='w-full' />
            </div>
            <div className='w-full sm:w-1/2 p-10'>
                <SectionTitle
                    title={"We Care About Your Comfort And Safety"}
                    subtitle={"BEST DRIVERS"}
                ></SectionTitle>
                <p>Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Netus et sed malesuada fames ac turpis. Netus et sed males ada fames ac turpis egesta doi tempus urna. Amet nulla facilisi morbi temp do.</p>
                <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>View More</button>
            </div>
        </div>
    );
};

export default Comfort;
