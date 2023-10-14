import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Testimonial.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";


const Testimonial = () => {


    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/comment')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    console.log(comments);


    return (
        <div className='px-20'>
            <SectionTitle
            title={"What Our Customers Say"}
            subtitle={"Read the testimonials from some of our satisfied customers."}
            ></SectionTitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                slidesPerView={3}
            >
                {comments.map(comment => (
                    <SwiperSlide key={comment.id}>

                        <div className='p-3 border-l-2 space-y-2'>
                            <h3 className='text-2xl font-semibold'>{comment.name}</h3>
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#d28d0d"
                                value={4}
                                edit={false}
                            />
                            <p className='text-gray-400 text-base'>{comment.comment}</p>
                            <h5 className='text-[#d28d0d]'>{comment.city}</h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    );
};

export default Testimonial;