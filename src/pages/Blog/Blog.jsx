import React from 'react';
import BlogNews from './BlogNews';
import ContactBottom from '../Contact Us/ContactBottom';

const blogNewsData = [
    {
        "id": 1,
        "date": "2023-09-29",
        "title": "Exciting News Announcement",
        "detail": "We are thrilled to announce our latest project that will revolutionize the way you experience technology. Stay tuned for more updates!",
        "img": "https://www.thedigitalbridges.com/wp-content/uploads/2017/05/successful-blog.png"
    },
    {
        "id": 2,
        "date": "2023-09-28",
        "title": "Tips for Productivity",
        "detail": "Learn valuable productivity tips and tricks to enhance your workflow and achieve your goals faster.",
        "img": "https://th.bing.com/th/id/OIP.OJZ88jChXPBURebSujmnhQHaD4?pid=ImgDet&w=1200&h=628&rs=1"
    },
    {
        "id": 3,
        "date": "2023-09-27",
        "title": "Exploring New Horizons",
        "detail": "Embark on a journey with us as we explore new horizons in the fields of science, technology, and innovation. Discover the future today.",
        "img": "https://th.bing.com/th/id/R.889856a3a1c6e35cee1f2a4fe9126e80?rik=U5NQz%2b4i2mXDSg&pid=ImgRaw&r=0"
    }
];

const Blog = () => {
    return (
        <>
            <section className="pt-20 lg:pt-10 pb-10 lg:pb-20 bg-[#F7F9FA]">
                <div className="w-full max-w-screen-xl mx-auto">
                    <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                                <h2 className='text-4xl py-5 font font-semibold '>Our Blogs</h2>
                                <p className="text-base text-body-color">
                                Explore the World of Luxury Cars: Tips, Trends, and Experiences
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 mx-4">
                        {blogNewsData.map(news => (
                            <BlogNews key={news.id} news={news} />
                        ))}
                    </div>
                </div>
            </section>
            <div className='bg-[#0c1315] w-full'>
                <ContactBottom></ContactBottom>
            </div>
        </>
    );
};

export default Blog;
