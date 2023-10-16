import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Chauffeurs1 from "../../../assets/Chauffeurs 1.jpg";
import Chauffeurs2 from "../../../assets/Chauffeurs 2.jpg";
import Chauffeurs3 from "../../../assets/Chauffeurs 3.jpg";
import Chauffeurs4 from "../../../assets/chauffer 44.jpg";
import { BsTelephoneInbound } from 'react-icons/bs';

const chauffeursData = [
  { name: 'Marco Watkivi', image: Chauffeurs1, phone: '+8801746468746' },
  { name: 'Henri Jam', image: Chauffeurs2, phone: '+8801746468746' },
  { name: 'Wikipia jency', image: Chauffeurs3, phone: '+8801746468746' },
  { name: 'David Jack', image: Chauffeurs4, phone: '+8801746468746' },
];

const Chauffeurs = () => {
  return (
    <div className='p-10 md:p-20'>
      <SectionTitle
        title="Our Professional Chauffeurs"
        subtitle="MEET OUR TEAM"
      />
      <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-7'>
        {chauffeursData.map((chauffeur, index) => (
          <div key={index} className='bg-black p-5 rounded text-center'>
            <img
              className='h-44 w-44 md:h-60 md:w-60 border-4 border-[#d28d0d] p-3 rounded-full mx-auto'
              src={chauffeur.image}
              alt={`Chauffeur ${index + 1}`}
            />
            <div className='text-center mt-4'>
              <h4 className='text-white text-lg md:text-xl'>{chauffeur.name}</h4>
              <div className='text-[#d28d0d] flex justify-center mt-2 items-center gap-2'>
                <BsTelephoneInbound className='text-[#d28d0d]' />
                <a className='text-white' href={`tel:${chauffeur.phone}`}>
                  {chauffeur.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chauffeurs;
