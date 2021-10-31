import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import PageLoader from '../../components/PageLoader/PageLoader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import useServerConfig from '../../hooks/useServerConfig';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {

    const [tours, setTours] = useState([])
    const serverUrl = useServerConfig()

    useEffect(() => {
        fetch(serverUrl + '/tours')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTours(result.tours)
            })
    }, [])
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <button className="btn btn-primary" >daisyUI Button</button> */}
            {/* This is a homepage
            {process.env.NODE_ENV}
            {process.env.REACT_APP_NODEJS_SERVER} */}

            {/* header  */}

            {/* slider  */}
            <div className="py-16">
                <h1 className="text-center text-5xl text-purple-600 font-bold">Tour Plans </h1>
            </div>
            {/* Tour Plans  */}
            {
                tours.length === 0 ?
                <PageLoader></PageLoader>
                :
                <div className="px-32  grid grid-cols-3 gap-4">
                {
                    
                        tours.map(tour => <ServiceCard key={tour._id} tour={tour}></ServiceCard>)
                }


            </div>
            }
            <WhyChooseUs></WhyChooseUs>
            
            {/* Tour Plans  */}
            {/* service section  */}
            <div className="pb-16">
                <h1 className="text-center text-5xl text-indigo-600 font-bold">Tourist Experience With US </h1>
            </div>
            {/* Students testimonial  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 mx-2 md:mx-10 xl:mx-36 pb-10 lg:pb-36 ">

                <Testimonial name="Janis Johnson" occupation="Web Developer" img="https://i.pravatar.cc/500?img=32"
                    msg="I can say without hesitation that CRAZY TOUR was one of the most rewarding experiences of our lifetimes. The opportunity to work as volunteers .." ></Testimonial>
                <Testimonial name="Miralia H." occupation="Graphics Designer" img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/efce71fb9c36c759a5c96d37a8cdc5e0/coursera-learner-b.png"
                    msg="This, my first trip to Israel and CRAZY TOUR experience, affected me in ways that I had not anticipated. As a secular Jew..." ></Testimonial>
                <Testimonial name="Sabrina M." occupation="HR Manager" img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5LDGatPtRSYDXjfMkQF0Id/238e7338df5a05e837e1fef84cceb7fc/coursera-learner-d.png"
                    msg="Never could I have imagined the wonderful experiences that awaited me/us/before we began our trip." ></Testimonial>




            </div>
            {/* Students testimonial  */}
            {/* footer  */}
        </div>
    );
};

export default Home;