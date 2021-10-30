import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <button class="btn btn-primary" >daisyUI Button</button> */}
            This is a homepage

            {/* header  */}

            {/* slider  */}
            {/* Tour Plans  */}
            <div className="px-32  grid grid-cols-3 gap-4">

                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            {/* Tour Plans  */}
            <Testimonial></Testimonial>
            {/* footer  */}
        </div>
    );
};

export default Home;