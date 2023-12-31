import React from 'react';
import BlogNews from './BlogNews/BlogNews';
import PageBanner from '../../components/PageBanner/PageBanner';
import Contact from '../Home/Contact/Contact';

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
            <section className=" pb-10 lg:pb-20 bg-[#0c1315]">
                <div className="w-full mx-auto">
                    <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <PageBanner bannerTitle="Blog"></PageBanner>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 m-9">
                        {blogNewsData.map(news => (
                            <BlogNews key={news.id} news={news} />
                        ))}
                    </div>
                </div>
            </section>
            <div className='bg-[#0c1315] w-full'>
                <Contact />
            </div>
        </>
    );
};

export default Blog;
