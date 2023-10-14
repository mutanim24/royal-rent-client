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
    const [comments, setComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/comment')
            .then(res => res.json())
            .then(data => {
                setComments(data);
                setFilteredComments(data.filter(comment => comment.ratings === 5));
            });
    }, []);

    // console.log(filteredComments);

    return (
        <div className='px-5 md:px-20'>
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
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {filteredComments.map(comment => (
                    <SwiperSlide key={comment._id}>
                        <div className='p-3 border-l-2 space-y-2 h-72'>
                            <h3 className='text-2xl font-semibold'>{comment.name}</h3>
                            <ReactStars
                                count={5}
                                value={comment.ratings}
                                size={24}
                                activeColor="#ffd700"
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
