import React from 'react';

const BookNow = () => {
  return (
    <section className=' mx-auto py-28 bg-[#141a1c]'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='grid grid-cols-2 gap-6b p-4 md:p-0'>
          <img src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-6.jpg" alt="" />
          <img src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-7.jpg" alt="" />
        </div>
        <div>
          <div className='py-4 p-4 md:p-0 md:pt-28'>
            <h2 className='text-xl md:text-4xl text-white font-semibold my-4'>We Care About Your <br />
              Comfort And Safety</h2>
            <span className='text-[#d28d0d] py-4 md:py-10'>ONLY THE BEST</span>
            <p className='text-gray-500 pt-4'>Praesent elementum facilisis leo vel fringilla est. Vest <br />bulum lectus a urise ultrices eros in cursus turpi uto.</p>
            <button className='mt-20 btn btn-outline outline-[#d28d0d] text-[#d28d0d]  uppercase'>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;