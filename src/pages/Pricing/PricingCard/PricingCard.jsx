import React from 'react';
import img1 from "../../../assets/Pricing-table-img-01.png"
import img2 from "../../../assets/Pricing-table-img-02.png"
import img3 from "../../../assets/Pricing-table-img-03.png"
import img4 from "../../../assets/client-01-hover.png"
import img5 from "../../../assets/client-02-hover.png"
import img6 from "../../../assets/client-03-hover.png"
import img7 from "../../../assets/client-04hover.png"
import img8 from "../../../assets/client-05-hover.png"
import SectionTitle from '../../../components/CardForCar/SectionTitle/SectionTitle';
import { BsCheck } from 'react-icons/bs';



const PricingCard = () => {
    return (
        <div className='w-11/12 my-10 mx-auto '>
            <SectionTitle
                title={"Luxury Limousine for Maximum Satisfaction. Enjoy."}
                subtitle={"EXCLUSIVE CARS"}
            ></SectionTitle>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                <div className="card w-90 border shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div>
                            <h3 className='text-3xl font-bold'>Superb</h3>
                            <h5 className='text-[#d28d0d]'> <span className='text-4xl font-semibold'>$140</span>/per day</h5>
                        </div>
                        <div className='mt-5 text-start space-y-2'>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Quisque non tellu si</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Pretium lectus quam id li</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Lorem ipsum 24/7</li>
                            </ul>
                        </div>
                        <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
                    </div>
                </div>
                <div className="card w-90 border shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div>
                            <h3 className='text-3xl font-bold'>Luxory</h3>
                            <h5 className='text-[#d28d0d]'> <span className='text-4xl font-semibold'>$150</span>/per day</h5>
                        </div>
                        <div className='mt-5 text-start space-y-2'>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Quisque non tellu si</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Pretium lectus quam id li</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Lorem ipsum 24/7</li>
                            </ul>
                        </div>
                        <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
                    </div>
                </div>
                <div className="card w-90 border shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div>
                            <h3 className='text-3xl font-bold'>Premium</h3>
                            <h5 className='text-[#d28d0d]'> <span className='text-4xl font-semibold'>$190</span>/per day</h5>
                        </div>
                        <div className='mt-5 text-start space-y-2'>
                            <ul className='text-gray-400 space-y-2'>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Leo urna molestie at elem</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Quisque non tellu si</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Pretium lectus quam id li</li>
                                <li className='flex gap-2 items-center'><BsCheck></BsCheck>Lorem ipsum 24/7</li>
                            </ul>
                        </div>
                        <button className='btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase'>Book Now</button>
                    </div>
                </div>
            </div>


            <div className='grid md:grid-cols-5 gap-8 my-20 place-items-center'>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>

        </div>
    );
};

export default PricingCard;