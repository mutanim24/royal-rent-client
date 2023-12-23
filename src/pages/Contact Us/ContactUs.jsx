import React from 'react';
import CardItems from './CardItems/CardItems';
import ContactMaps from './ContactMaps/ContactMaps';
import PageBanner from '../../components/PageBanner/PageBanner';
import BookNow from './BookNow/BookNow';
import Contact from '../Home/Contact/Contact';

const ConatctUs = () => {
  return (
    <div className='bg-[#0c1315]'>
     <PageBanner bannerTitle="contact"></PageBanner>
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
      <Contact />
    </div>

  );
};

export default ConatctUs;