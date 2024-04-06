import React, { Component } from 'react'
import { FaBed, FaTaxi, FaBasketballBall } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { BsFillPersonFill,BsFillPlayFill } from 'react-icons/bs';
import { HiWifi } from 'react-icons/hi';
import {BiWorld,BiSupport} from 'react-icons/bi';
import ig1 from './img/ig1.jpg';

export class Service extends Component {
    render() {
        return (
            <div>
                <section className='md:py-20 lg:py-24  py-16 bg-[#F1F8FF]'>
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-4 sm:grid-cols-2 ">
                            <div className=" flex flex-col bg-white items-center px-6 py-12 rounded-lg border-[1px] border-solid">
                                <div className="icon bg-[#F39C12] h-[70px] w-[70px] rounded-full relative mb-7">
                                    <FaBed className='text-white text-[30px] absolute left-[21px] top-[21px]' />
                                </div>
                                <div className="service-text text-center">
                                    <h3 className='text-[20px] font-bold text-[#777]'>Delux Room</h3>
                                    <p className='text-gray-600 w-52 my-2'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy</p>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white items-center px-6 py-12 rounded-lg border-[1px] border-solid">
                                <div className="icon bg-[#22A6B3] h-[70px] w-[70px] rounded-full relative mb-7">
                                    <IoFastFoodSharp className='text-white text-[30px] absolute left-[21px] top-[21px]' />
                                </div>
                                <div className="service-text text-center">
                                    <h3 className='text-[20px] font-bold text-[#777]'>Delicoius Food</h3>
                                    <p className='text-gray-600 w-52 my-2'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy</p>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white items-center px-6 py-12 rounded-lg border-[1px] border-solid">
                                <div className="icon bg-[#FC5C65] h-[70px] w-[70px] rounded-full relative mb-7">
                                    <FaTaxi className='text-white text-[30px] absolute left-[21px] top-[21px]' />
                                </div>
                                <div className="service-text text-center">
                                    <h3 className='text-[20px] font-bold text-[#777]'>Airport Taxi</h3>
                                    <p className='text-gray-600 w-52 my-2'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy</p>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white items-center px-6 py-12 rounded-lg border-[1px] border-solid">
                                <div className="icon bg-[#3B3B98] h-[70px] w-[70px] rounded-full relative mb-7">
                                    <FaBasketballBall className='text-white text-[30px] absolute left-[21px] top-[21px]' />
                                </div>
                                <div className="service-text text-center">
                                    <h3 className='text-[20px] font-bold text-[#777]'>Game Room</h3>
                                    <p className='text-gray-600 w-52 my-2'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* Why Choose Us start */}
                <section className='lg:pt-24 md:pt-20 pt-16 '>
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div className="">
                                <div className='relative'>
                                    <img src={ig1} alt="" className=' h-[478px] w-full flex justify-center items-center' />
                                    <div className='absolute bg-black/50 h-full w-full top-0 left-0'></div>
                                    <div className='bg-white text-[#fc5b62] md:h-[80px] h-[50px] md:w-[80px] w-[50px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 transition-colors flex justify-center items-center hover:text-white hover:bg-[#fc5b62]'>
                                        <BsFillPlayFill className='text-2xl '/>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-3 p-4">
                                <p className='text-[#fc5b62] mb-4'>Why Choose Us?</p>
                                <h2 className='md:text-[30px] text-2xl lg:w-80  font-semibold mb-6 '>Every Time We Provide Best Service</h2>
                                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                                    <div className="flex">
                                        <div className="icon h-[55px] w-[55px] bg-[#fc5b62] rounded-full text-white  mt-4 flex justify-center items-center">
                                            <BsFillPersonFill className='absolute text-[24px] ' />
                                        </div>
                                        <div className="text px-2 py-2">
                                            <h2 className='text-xl mb-2  font-semibold'>Best Travel Guide</h2>
                                            <p className='w-44 text-[#777]'>Lorem Ipsum is simply dummy text of the printing typesetting</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="icon h-[55px] w-[55px] rounded-full text-white bg-[#fc5b62] mt-4  flex justify-center items-center">
                                            <BiWorld className='absolute text-[24px]'/>
                                        </div>
                                        <div className="text px-2 py-2">
                                            <h2 className='text-xl mb-2  font-semibold'>World Class Service</h2>
                                            <p className='w-44 text-[#777]'>Lorem Ipsum is simply dummy text of the printing typesetting</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="icon h-[55px] w-[55px] rounded-full text-white bg-[#fc5b62] mt-4  flex justify-center items-center">
                                        <HiWifi className='absolute text-[24px]'/>
                                        </div>
                                        <div className="text px-2 py-2">
                                            <h2 className='text-xl mb-2  font-semibold'>Free Wifi</h2>
                                            <p className='w-44 text-[#777]'>Lorem Ipsum is simply dummy text of the printing typesetting</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="icon h-[55px] w-[55px] rounded-full text-white bg-[#fc5b62] mt-4  flex justify-center items-center">
                                            <BiSupport className='absolute text-[24px]' />
                                        </div>
                                        <div className="text px-2 py-2">
                                            <h2 className='text-xl mb-2  font-semibold'>24/7 Support</h2>
                                            <p className='w-44 text-[#777]'>Lorem Ipsum is simply dummy text of the printing typesetting</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* Why Choose Us end */}

            </div>
        )
    }
}

export default Service
