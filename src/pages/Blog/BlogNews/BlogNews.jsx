import moment from 'moment/moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogNews = ({ news }) => {
    const { date, img, detail, title, _id } = news;

    // Check if title and detail exist before accessing slice method
    const truncatedTitle = title?.slice(0, 70);
    const truncatedDetail = detail?.slice(0, 100);

    return (
        <>
            <div data-testid="testNews" className="px-4 cursor-pointer border border-slate-400 py-4">
                <div className="max-w-[400px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                        <img
                            src={img}
                            alt="image"
                            className="w-full h-52"
                        />
                    </div>
                    <div>
                        <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                            {moment(date).format("MMM Do YY")}
                        </span>
                        <h3>
                            <Link to={`detail/${_id}`} className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-white hover:text-[#d28d0d]">
                                {truncatedTitle}
                            </Link>
                        </h3>
                        <p className="text-gray-500 text-body-color overflow-y-auto scrollbar-hide">
                            {truncatedDetail} ....
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogNews;
