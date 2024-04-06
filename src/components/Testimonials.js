import React, { Component } from 'react'
import blog1 from './img/blog1.jpg'
import blog2 from './img/blog2.jpg'
import blog3 from './img/blog3.jpg'
// import section_img from './img/section-bg.jpg'
import pro_img1 from './img/pro1.png'
import pro_img2 from './img/pro2.png'
import pro_img3 from './img/pro3.png'
import { BiTimeFive, BiMessageDetail, BiRightArrowAlt } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export class Testimonials extends Component {
  render() {

    const setting = {
      className: "center",
      autoplay:true,
      centerMode: true,
      infinite: true,
      centerPadding: "70px",
      slidesToShow: 3,
      speed: 700,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }, {
          breakpoint: 250,
          settings: {
            slidesToShow: 0,
            slidesToScroll: 0,
            infinite: true,
            dots: false,
          }
        }
        
        
      ]
      
    };
    return (
      <div>
        <section className='lg:py-20 md:py-16 py-10'>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className='text-center pb-10'>
              <p className='text-[#fc5b62]'>Latest Blog Posts</p>
              <h1 className='md:text-[30px] text-2xl font-semibold'>Our Latest Article <br />For Travellers</h1>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4">
              <div className='shadow-xl rounded overflow-hidden'>
                <div className='blog-img'>
                  <img src={blog1} alt="" />
                </div>
                <div className="blog-text p-7">
                  <ul className="flex justify-between pb-2">
                    <li className='flex text-[]'><BiTimeFive className='mt-1 text-[#fc5b63]' /> 15 May 2023</li>
                    <li className='flex text-[]'><BiMessageDetail className='mt-[5px] me-2 text-[#fc5b63]' /><a href=""> 0 Comments</a></li>
                  </ul>
                  <h2 className='text-xl font-semibold w-72 pb-2'><a href="" className='hover:text-[#fc5b63] delay-75 transition'>Gray and Black Dslr Camera Beside Sun Hat</a></h2>
                  <p className='text-[#777] pb-2 w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin mi tincidunt faucibus</p>
                  <a href="" className='text-[#fc5b63] underline flex '>View Details <BiRightArrowAlt className='mt-1' /> </a>
                </div>
              </div>

              <div className='shadow-xl rounded overflow-hidden'>
                <div className='blog-img'>
                  <img src={blog2} alt="" />
                </div>
                <div className="blog-text p-7">
                  <ul className="flex justify-between pb-2">
                    <li className='flex text-[]'><BiTimeFive className='mt-1 text-[#fc5b63]' /> 15 May 2023</li>
                    <li className='flex text-[]'><BiMessageDetail className='mt-[5px] me-2 text-[#fc5b63]' /><a href=""> 0 Comments</a></li>
                  </ul>
                  <h2 className='text-xl font-semibold w-72 pb-2'><a href="" className='hover:text-[#fc5b63] delay-75 transition'>Golden Gate Bridge, San Francisco</a></h2>
                  <p className='text-[#777] pb-2 w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin mi tincidunt faucibus</p>
                  <a href="" className='text-[#fc5b63] underline flex '>View Details <BiRightArrowAlt className='mt-1' /> </a>
                </div>
              </div>

              <div className='shadow-xl rounded overflow-hidden'>
                <div className='blog-img'>
                  <img src={blog3} alt="" />
                </div>
                <div className="blog-text m-7">
                  <ul className="flex justify-between pb-2">
                    <li className='flex text-[]'><BiTimeFive className='mt-1 text-[#fc5b63]' /> 15 May 2023</li>
                    <li className='flex text-[]'><BiMessageDetail className='mt-[5px] me-2 text-[#fc5b63]' /><a href=""> 0 Comments</a></li>
                  </ul>
                  <h2 className='text-xl font-semibold w-72 pb-2'><a href="" className='hover:text-[#fc5b63] delay-75 transition'>Brown Pendant Lamp Hanging on Trees</a></h2>
                  <p className='text-[#777] pb-2 w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin mi tincidunt faucibus</p>
                  <a href="" className='text-[#fc5b63] underline flex '>View Details <BiRightArrowAlt className='mt-1' /> </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-section lg:py-20 md:py-16 py-10'>
            <div className='relative text-center pb-10'>
              <p className='text-[#fc5b62]'>Testimonials</p>
              <h1 className='md:text-[30px] text-2xl font-semibold text-white'>What Our Happy Customers <br />Say About Us</h1>
            </div>



            <Slider {...setting} className='py-16 overflow-hidden mx-auto w-full max-w-screen-xl'>
              <div >
                <div className=''>
                  <div className='flex flex-col items-center text-white'>
                    <p className='lg:w-48 md:w-72 sm:w-80 w-full text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                    <div className='rounded-full overflow-hidden'>
                      <img src={pro_img1} alt="" />
                    </div>
                    <p className='text-white font-bold'>Williamson</p>
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

              <div>
                <div className=''>
                  <div className='flex flex-col items-center text-white'>
                    <p className='lg:w-48 md:w-72 sm:w-80 w-full text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                    <div className='rounded-full overflow-hidden'>
                      <img src={pro_img2} alt="" />
                    </div>
                    <p className='text-white font-bold'>Williamson</p>
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

              <div>
                <div className=''>
                  <div className='flex flex-col items-center text-white'>
                    <p className='lg:w-48 md:w-72 sm:w-80 w-full text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                    <div className='rounded-full overflow-hidden'>
                      <img src={pro_img3} alt="" />
                    </div>
                    <p className='text-white font-bold'>Williamson</p>
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

              <div>
                <div className=''>
                  <div className='flex flex-col items-center text-white'>
                    <p className='lg:w-48 md:w-72 sm:w-80 w-full text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                    <div className='rounded-full overflow-hidden'>
                      <img src={pro_img1} alt="" />
                    </div>
                    <p className='text-white font-bold'>Williamson</p>
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

              <div>
                <div className=''>
                  <div className='flex flex-col items-center text-white'>
                    <p className=' lg:w-48 md:w-72 sm:w-80 w-full text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                    <div className='rounded-full overflow-hidden'>
                      <img src={pro_img2} alt="" />
                    </div>
                    <p className='text-white font-bold'>Williamson</p>
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

              <div>
                <div className=''>
                  <div className='flex flex-col items-center text-white'>
                    <p className=' lg:w-48 md:w-72 sm:w-80 w-full text-center' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit</p>
                    <div className='rounded-full overflow-hidden'>
                      <img src={pro_img3} alt="" />
                    </div>
                    <p className='text-white font-bold'>Williamson</p>
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


            </Slider>


          </div>
        </section>
      </div >
    )
  }
}

export default Testimonials
