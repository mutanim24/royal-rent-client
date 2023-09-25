import { BsHeadset } from 'react-icons/bs';
const About = () => {
    return (
        <div className='grid grid-cols-2 gap-5 px-20 py-20'>
            <div>
                <h1 className='text-3xl font-bold'>What We Provide Is The Luxury Transport And Most Comfortable Experience</h1>
            </div>
            <div>
                <p>Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo intege in malesuada nunc vel risus commodo. Sapien nec sagittis aliquam male bibendum arcu vitae. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget nulla facilisi nul.</p>
                <div className='text-[#d28d0d] flex gap-4 items-center mt-5'>
                    <BsHeadset className='text-[#d28d0d]'></BsHeadset><span>call: +8801746404687</span>
                </div>
            </div>
        </div>
    );
};

export default About;