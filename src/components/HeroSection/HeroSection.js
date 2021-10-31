import React from 'react';

const HeroSection = () => {
    return (
        <>
            <div className="z-10 relative  " >
                <div className="absolute w-full h-96 top-0  z-30 flex  items-center justify-center" >
                    <div className="flex flex-columns">

                        <h1 className="text-center text-4xl text-white font-bold">Life is short , EXPLORE it </h1>
                        {/* <h4 className="text-2xl text-gray-200">--- CRAZY TOUR </h4> */}
                    </div>
                </div>
                <div className="absolute w-full h-full" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                <img src="https://news.cgtn.com/news/2021-05-06/A-brief-travel-guide-to-Guilin-A-gallery-of-mountains-and-lakes--102RWAEUXNS/img/526567f7d7424bfc8ede0bd34090935d/526567f7d7424bfc8ede0bd34090935d.png" alt="hero" className="w-full absulate  top-0 z-20	" ></img>
                {/* <div className="w-full bg-white absolute top-0 left-0 z-10">
                    
                    <SpinnerLoader></SpinnerLoader>
                </div> */}
            </div>
            {/* <div className="flex pb-5 relative h-48">

                <img src={img} alt=" theme preview " className="w-full absulate  top-0 z-20 object-cover object-center rounded-lg shadow-md h-60" />

                <div className="w-full bg-white absolute top-0 left-0 z-10">
                    <SpinnerLoader></SpinnerLoader>
                </div>

            </div> */}
        </>

    );
};

export default HeroSection;