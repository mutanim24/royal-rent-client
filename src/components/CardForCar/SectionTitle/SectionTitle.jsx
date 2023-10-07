import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='mb-12'>
           <h1 className='text-3xl text-white mb-3'>{heading}</h1> 
            <h4 className='text-[#d28d0d] uppercase'>{subheading}</h4>
        </div>
    );
};

export default SectionTitle;