import React, { Component } from 'react'
import pro_img1 from './img/pro1.png'
import pro_img2 from './img/pro2.png'
import pro_img3 from './img/pro3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai'


export class Demo extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };

        return (
            <div>
                <Slider {...settings}>
                    <div className='text-center'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col items-center text-black'>
                                    <p className=' text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                                    <div className='rounded-full overflow-hidden'>
                                        <img src={pro_img1} alt="" />
                                    </div>
                                    <p className='text-black font-bold'>Williamson</p>
                                    <ul className='flex text-yellow-200'>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col items-center text-black'>
                                    <p className=' text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                                    <div className='rounded-full overflow-hidden'>
                                        <img src={pro_img2} alt="" />
                                    </div>
                                    <p className='text-black font-bold'>Williamson</p>
                                    <ul className='flex text-yellow-200'>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col items-center text-black'>
                                    <p className=' text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                                    <div className='rounded-full overflow-hidden'>
                                        <img src={pro_img3} alt="" />
                                    </div>
                                    <p className='text-black font-bold'>Williamson</p>
                                    <ul className='flex text-yellow-200'>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col items-center text-black'>
                                    <p className=' text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                                    <div className='rounded-full overflow-hidden'>
                                        <img src={pro_img1} alt="" />
                                    </div>
                                    <p className='text-black font-bold'>Williamson</p>
                                    <ul className='flex text-yellow-200'>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col items-center text-black'>
                                    <p className=' text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                                    <div className='rounded-full overflow-hidden'>
                                        <img src={pro_img2} alt="" />
                                    </div>
                                    <p className='text-black font-bold'>Williamson</p>
                                    <ul className='flex text-yellow-200'>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col items-center text-black'>
                                    <p className=' text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                                    <div className='rounded-full overflow-hidden'>
                                        <img src={pro_img3} alt="" />
                                    </div>
                                    <p className='text-black font-bold'>Williamson</p>
                                    <ul className='flex text-yellow-200'>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>



            </div>
        )
    }
}

export default Demo
