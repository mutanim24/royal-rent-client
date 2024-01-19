import { Fade } from 'react-awesome-reveal';
import { BsHeadset } from 'react-icons/bs';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20 py-10 md:py-20'>
            <Fade triggerOnce direction='left'>
                <div className="text-center md:text-left">
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#d28d0d]'>What We Provide Is The Luxury Transport And Most Comfortable Experience</h1>
                </div>
            </Fade>
            <Fade triggerOnce direction='right'>
                <div className="text-center md:text-left">
                    <p>Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo intege in malesuada nunc vel risus commodo. Sapien nec sagittis aliquam male bibendum arcu vitae. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget nulla facilisi nul.</p>
                    <div className='text-gold flex gap-4 items-center justify-center md:justify-start mt-5'>
                        <BsHeadset className='text-gold text-3xl text-[#d28d0d]'></BsHeadset><span className='text-xl md:text-2xl'>call: +8801746404687</span>
                    </div>
                </div>
            </Fade>


        </div>
    );
};

export default About;
