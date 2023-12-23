import React from 'react';

const ContactBottom = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5 py-20 place-items-center'>
            <div className='flex items-center gap-4'>
                <img src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/content-bottom-icon-001.png" className='w-10 h-10' alt="" />
                <p className='text-gray-500'>
                    11 Rue de la Mutualité, <br />
                    92400 Paris</p>
            </div>
            <div className='flex items-center gap-4 py-10 md:py-0'>
                <img src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/h1-icon-img-1.2.png" className='w-10 h-10' alt="" />
                <p className='text-gray-500'>
                    Phone: (012) 345 6789 0123; <br />
                    Email: luxe@example.com
                </p>
            </div>
            <div className='flex items-center gap-4' >
                <img src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/content-bottom-icon-003.png" className='w-10 h-10' alt="" />
                <p className='text-gray-500'>
                    Mon-Sat 09:00-23:00; <br />
                    Sunday is closed.</p>
            </div>
        </div>
    );
};

export default ContactBottom;