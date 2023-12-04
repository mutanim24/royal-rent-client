import React from 'react';

const Newslatter = () => {
    return (
        <div className='text-center p-8 md:p-20 border w-11/12 md:w-8/12 mx-auto'>
            <h2 className='text-3xl mb-3 font-bold'>Accelerate Your Savings with Our Exclusive Offers!</h2>
            <p className='py-5 md:py-0'>Sign up for our newsletter to receive insider access to limited-time promotions and unbeatable car rental deals.</p>
            <div>
                <input type="text" placeholder="Your email" className="input input-bordered w-full rounded-none max-w-xs" />
                <button className='btn rounded-none btn-outline outline-[#d28d0d] text-[#d28d0d] mt-5 md:mt-10 uppercase'>Get Offers</button>
            </div>
        </div>
    );
};

export default Newslatter;