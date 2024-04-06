import React, { Component } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import img1 from "./img/g1.jpg"
import img2 from "./img/g2.jpg"
import img3 from "./img/g3.jpg"
import img4 from "./img/g4.jpg"
import img5 from "./img/g5.jpg"
import img6 from "./img/g6.jpg"
import img7 from "./img/g7.jpg"

export class Gallery extends Component {
    render() {
        return (
            <div>
                <section className='md:pt-24 pt-14 md:pb-10 pb-5'>
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className='text-center pb-10'>
                            <p className='text-[#fc5b62]'>Tour Gallery</p>
                            <h1 className='md:text-[30px] text-2xl font-semibold '>Best Tourist's Shared <br /> Photos</h1>
                        </div>

                        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4">
                            <div className="gallery-img row-span-2 relative rounded overflow-hidden">
                                <img src={img1} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                   india
                                </div>
                            </div>
                            <div className="gallery-img relative rounded overflow-hidden">
                                <img src={img2} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                    italy
                                </div>
                            </div>

                            <div className="gallery-img relative rounded overflow-hidden">
                                <img src={img3} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                    maldives
                                </div>
                            </div>
                            <div className="gallery-img relative rounded overflow-hidden">
                                <img src={img4} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                    malyasia
                                </div>
                            </div>
                            <div className="row-span-2 gallery-img relative rounded overflow-hidden">
                                <img src={img5} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                    japan
                                </div>
                            </div>
                            <div className="gallery-img relative rounded overflow-hidden">
                                <img src={img6} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                    dubai
                                </div>
                            </div>
                            <div className="gallery-img relative rounded overflow-hidden">
                                <img src={img7} className='h-full ' alt="" />
                                <div className="gallery-icon relative  bg-[#fc5b62] hover:bg-white text-white hover:text-black transition h-[50px] w-[50px] rounded-full   ">
                                    <div><FaSearchPlus className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /></div>
                                </div>
                                <div className="gallery-text text-white font-semibold absolute bottom-4 left-4 text-xl capitalize">
                                    india
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button type="button" class="text-white bg-[#fc5b62;] hover:bg-[#211E3B] font-medium rounded-lg md:text-lg text-base px-5 py-2.5 text-center inline-flex items-center my-5 ">
                                View All Photos <FiArrowRight className='mt-1 ms-2' />
                            </button>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Gallery;
