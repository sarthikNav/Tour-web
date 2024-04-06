import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from './img/c1.jpg';
import c2 from './img/c2.jpg';
import c3 from './img/c3.jpg';
import c4 from './img/c4.jpg';
import c5 from './img/c5.jpg';
import c6 from './img/c6.jpg';
import c7 from './img/c7.jpg';
import cp1 from './img/cp1.jpg';
import cp2 from './img/cp2.jpg';
import cp3 from './img/cp3.jpg';
import cp4 from './img/cp4.jpg';
import cp5 from './img/cp5.jpg';
import cp6 from './img/cp6.jpg';
import { AiFillStar } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'

export class Carousel extends Component {
  render() {

    const first = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 100,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
      ]
    };
    const second = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 200,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },{
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    };
    

    return (
      <div>
        <section className='lg:py-20 md:py-16 py-10' >
          <div className="mx-auto w-full max-w-screen-xl">
            <div className='text-center pb-10'>
              <p id='button1' className='text-[#fc5b62]'>Popular Tour Package</p>
              <h1 className='md:text-[30px] text-2xl font-semibold '>The Best Of Our All <br />Tour Packages</h1>
            </div>

            <Slider {...first} >
              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50" src={c1} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <a href="#" class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"><FaLocationDot className='mt-1 me-2' /> Praia do Cassino Beach, Brazil</a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>

              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50" src={c2} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"><FaLocationDot className='mt-1 me-2' /> Praia do Cassino Beach, Brazil</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>

              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50" src={c3} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"><FaLocationDot className='mt-1 me-2' /> Praia do Cassino Beach, Brazil</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>

              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50" src={c4} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"><FaLocationDot className='mt-1 me-2' /> Praia do Cassino Beach, Brazil</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>

              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50" src={c5} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"><FaLocationDot className='mt-1 me-2' />Praia do Cassino Beach, Brazil</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>

              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50 " src={c6} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"><FaLocationDot className='mt-1 me-2' /> Praia do Cassino Beach, Brazil</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>

              <div className='casousel-item px-4'>
                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-[#fc5b62]">
                  <a href="#">
                    <img class="rounded-t-lg transition-all hover:saturate-50" src={c7} alt="" />
                  </a>
                  <div className='absolute top-5 left-0 bg-white rounded-r-full text-[#fc5b62] font-semibold px-4 py-[2px]'>
                    $236
                  </div>
                  <div class="p-5">
                    <ul className='flex text-yellow-300'>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil Sea Beach</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex"> <FaLocationDot className='mt-1 me-2' />Praia do Cassino Beach, Brazil</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fc5b62] rounded-lg  ">
                      5 Days - 4 Night</a>
                  </div>
                </div>
              </div>
            </Slider>

          </div>
        </section >

        <section className='bg-[#211E3B] lg:py-20 md:py-16 py-5'>
          <div className="mx-auto w-full max-w-screen-xl">
            <Slider {...second}>

              <div className='px-[70px]'>
                <img src={cp1} alt="" />
              </div>
              <div className='px-[70px]'>
                <img src={cp2} alt="" />
              </div>
              <div className='px-[70px]'>
                <img src={cp3} alt="" />
              </div>
              <div className='px-[70px]'>
                <img src={cp4} alt="" />
              </div>
              <div className='px-[70px]'>
                <img src={cp5} alt="" />
              </div>
              <div className='px-[70px]'>
                <img src={cp6} alt="" />
              </div>

            </Slider>
          </div>
        </section>

      </div >
    )
  }
}

export default Carousel;
