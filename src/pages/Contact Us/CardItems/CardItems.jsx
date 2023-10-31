import React from 'react';

const CardItems = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 mx-4 md:mx-48 gap-8 py-10'>
                <div>
                    <h3 className='text-white text-xl'>Amesterdam</h3>
                    <p className='text-gray-400 text-lg'>Schoonboomstraat 109, Nederland <br />
                        Office: +123 4567 8901 <br />
                        Mon-Sat 9:00-23:00; Sunday closed</p>
                </div>
                <div>
                    <h3 className='text-white text-xl'>London</h3>
                    <p className='text-gray-400 text-lg'>9 Stockwell Park Rd, United Kingdom <br />
                        Office: +234 5678 9012 <br />
                        Mon-Sat 9:00-23:00; Sunday closed</p>
                </div>
                <div>
                    <h3 className='text-white text-xl'>Milan</h3>
                    <p className='text-gray-400 text-lg'>Via Sebastiano Caboto 2, Italy <br />
                        Office: +345 6789 0123 <br />
                        Mon-Sat 9:00-23:00; Sunday closed</p>
                </div>
                <div>
                    <h3 className='text-white text-xl'>Barcelona</h3>
                    <p className='text-gray-400 text-lg'>C. del Consell de Cent 549, Spain <br />
                        Office: +456 7890 1234 <br />
                        Mon-Sat 9:00-23:00; Sunday closed</p>
                </div>
            </div>
        </div>
    );
};

export default CardItems;