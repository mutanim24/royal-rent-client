import React from 'react';
import img1 from "../../../assets/inner-faq-img-1.2.jpg"
import img2 from "../../../assets/inner-faq-img-2.jpg"
import img3 from "../../../assets/inner-faq-img-3.jpg"

const Gallery = () => {
    return (
        <div className="flex gap-6 my-10 w-11/12 mx-auto">
            <div className="w-1/2">
                <img src={img1} alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="w-1/4">
                <img src={img2} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/4">
                <img src={img3} alt="Image 3" className="w-full h-auto" />
            </div>
        </div>

    );
};

export default Gallery;