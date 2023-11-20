import "./Hero.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


const HeroSection = () => {
  return (

    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          'background-image':
            'url(https://eskipaper.com/images/supercar-4.jpg)',
        }}
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 1
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 2
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 3
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
