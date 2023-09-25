import About from "../About/About";
import Chauffeurs from "../Chauffeurs/Chauffeurs";
import Contact from "../Contact/Contact";
import HeroSection from "../HeroSection/HeroSection";
import Offer from "../Offer/Offer";
import Option from "../Option/Option";
import PremiumCar from "../PremiumCar/PremiumCar";
import Quality from "../Quality/Quality";
import Safety from "../Safety/Safety";
import ServiceCar from "../ServiceCar/ServiceCar";
import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
    return (
        <div className="bg-[#1f2937] text-white">
           <HeroSection></HeroSection>
           <About></About>
           <ServiceCar></ServiceCar>
           <Quality></Quality>  
           <Safety></Safety>
           <Offer></Offer>
           <Chauffeurs></Chauffeurs>
           <PremiumCar></PremiumCar>
           <Testimonial></Testimonial>
           <Option></Option>
           <Contact></Contact>
        </div>
    );
};

export default HomePage;