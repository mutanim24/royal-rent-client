import React from 'react';

const ContactMaps = () => {
    return (
        <div>
            <section className="text-gray-400 body-font relative">
                <div className="absolute inset-0 bg-gray-500">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.282517279259!2d4.792131615603119!3d52.3471359797796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e3c30046315d%3A0x4d71c3087426f0fa!2sSchoonboomstraat%20109%2C%201069%20BH%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1632088580592!5m2!1sen!2sus"
                        style={{}}
                    ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-[#0c1315] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-400">
                            Post-ironic portland shabby chic echo park, banjo fashion axe
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="btn btn-outline outline-[#d28d0d] text-[#d28d0d] mt-10 uppercase">
                            Submit
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactMaps;
