import React, { Component } from 'react'
import img1 from './img/1.jpg'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom/cjs/react-router-dom'
export class Slider extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="w-full">
                        <div className=" relative">
                            <img src={img1} width='100%' className='sm:h-[640px] h-[520px]' alt="" />
                            <div className='absolute top-0 bg-black/50 h-full w-full  '></div>
                            <div class="hero-text absolute md:top-40 sm:top-28 top-16 sm:left-24 left-10 sm:right-24 right-10 text-center text-white">
                                <h1 className='font-bold md:text-[60px] text-[40px] font-serif my-2'>
                                    Welcome To our Hotel <br /> and Resort
                                </h1>
                                <p className='md:text-lg mb-3 sm:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard .</p>
                                <a href='#button1' class="text-white bg-[#fc5b62;]  hover:bg-[#211E3B] font-medium rounded-lg md:text-lg text-base px-5 py-2.5 text-center inline-flex items-center my-5 ">Booking Now <FiArrowRight className='mt-1 ms-2' /></a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Slider
