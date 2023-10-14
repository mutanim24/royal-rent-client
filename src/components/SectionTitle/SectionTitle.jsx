import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='mb-10 '>
           <h1 className='text-3xl text-white mb-3'>{title}</h1> 
            <h4 className='text-[#d28d0d] uppercase'>{subtitle}</h4>
        </div>
    );
};

export default SectionTitle;