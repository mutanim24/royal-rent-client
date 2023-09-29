import React from 'react';
import CardItems from './CardItems';
import ContactMaps from './ContactMaps';
import BookNow from './BookNow';
import ContactBottom from './ContactBottom';

const ConatctUs = () => {
  return (
    <div className='bg-[#0c1315]'>
      <section className="bg-cover bg-center relative py-16 md:py-32" style={{ backgroundImage: 'url("https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-c-img-1.jpg")' }}>
        <h2 className='text-2xl md:text-4xl font-semibold text-center py-8 md:py-28 text-white'>Contact Us</h2>
      </section>
      <section className='w-11/12 md:w-5/6 mx-auto bg-[#0c1315] pb-28'>
        <div className='py-8 md:pt-28'>
          <h2 className='text-xl md:text-4xl text-white font-semibold my-4'>Ride To Destinations <br />
            With Maximum Comfort</h2>
          <span className='text-[#d28d0d] py-4 md:py-10'>FINEST TRANSPORT</span>
          <hr className='mt-4 border border-gray-700' />
        </div>
        < CardItems />
        <ContactMaps />
      </section>
      <BookNow />
      <ContactBottom />
    </div>

  );
};

export default ConatctUs;