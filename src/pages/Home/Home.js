import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {

    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTours(result.products)
            })
    }, [])
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <button class="btn btn-primary" >daisyUI Button</button> */}
            This is a homepage

            {/* header  */}

            {/* slider  */}
            {/* Tour Plans  */}
            <div className="px-32  grid grid-cols-3 gap-4">
                {
                    tours.map(tour => <ServiceCard key={tour._id} tour={tour}></ServiceCard>)
                }


            </div>
            {/* Tour Plans  */}
            <Testimonial></Testimonial>
            {/* footer  */}
        </div>
    );
};

export default Home;