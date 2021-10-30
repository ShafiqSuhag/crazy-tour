import React from 'react';

const HeroSection = () => {
    return (
        <div className="z-10 relative " style={{marginTop: -60}}>
            <div className="absolute w-full h-full" style={{backgroundColor: 'rgba(0,0,0,0.1)'}}></div>
            <img src="https://news.cgtn.com/news/2021-05-06/A-brief-travel-guide-to-Guilin-A-gallery-of-mountains-and-lakes--102RWAEUXNS/img/526567f7d7424bfc8ede0bd34090935d/526567f7d7424bfc8ede0bd34090935d.png" alt="hero" className="w-full	" ></img>
        </div>
    );
};

export default HeroSection;