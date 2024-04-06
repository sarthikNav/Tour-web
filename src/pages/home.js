import React, { Component } from 'react'
import Slider from '../components/slider';
import Service from '../components/service';
import Gallery from '../components/gallery';
import Counter from '../components/counter';
import Destinations from '../components/Destinations';
import Carousel from '../components/carousel';
import Testimonials from '../components/Testimonials.js';
import Contect from '../components/contect';
import { FaArrowUp } from "react-icons/fa";
const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <div>   
            <Slider />
            <Service />
            <Gallery />
            <Counter />
            <Destinations />
            <Carousel />
            <Testimonials />
            <Contect />
            
            <div className="top-control">
            <button className='bg-red-500 text-white p-3 rounded-md' onClick={scrollToTop}><FaArrowUp /></button>
            </div>
        </div>
    )

}

export default Home;
