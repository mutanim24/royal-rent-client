import React from 'react';
import bannerBg from '../../assets/banner-bg-3.jpg'

const PageBanner = ({bannerTitle}) => {
    return (
        <div>
            <div className="hero h-64" style={{ backgroundImage: `url(${bannerBg})` }}>
                <div className="hero-overlay bg-black bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{bannerTitle}</h1>
                        {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;