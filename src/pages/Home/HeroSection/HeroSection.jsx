
import "./Hero.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/h1-rev-img-1b.jpg"
import img2 from "../../../assets/h1-rev-img-2b.jpg"
const HeroSection = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} alt="Image 1" />
          <div className="legend-container">
            <p className="legend-title text-2xl md:text-6xl">Explore the Open Road</p>
            <p className="legend-subtitle text-xl md:text-3xl">Unleash the Adventure with Our Rental Cars</p>
          </div>
        </div>
        <div>
          <img src={img2} alt="Image 2" />
          <div className="legend-container">
            <p className="legend-title text-2xl md:text-6xl ">Luxury on Wheels</p>
            <p className="legend-subtitle text-xl md:text-3xl">Experience Elegance and Style with Our Premium Fleet</p>
          </div>
        </div>
      </Carousel>

    </div>
  );
};

export default HeroSection;