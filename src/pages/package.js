import React, { Component } from 'react'
import Destinations from '../components/Destinations';
import image from '../components/img/section-bg.jpg'


export class Package extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="w-full">
                        <div className=" relative">
                            <img src={image} width='100%' className='sm:h-[300px] h-[220px]' alt="" />
                            <div className='absolute top-0 bg-black/50 h-full w-full  '></div>
                            <div class="hero-text absolute md:top-40 sm:top-28 top-16 sm:left-24 left-10 sm:right-24 right-10 text-center text-white">
                                <h1 className='font-bold md:text-[50px] text-[40px] font-serif'>
                                    TOP PACKAGE
                                </h1>

                            </div>
                        </div>
                    </div>
                    <Destinations />

                </section>

            </div>
        )
    }
}

export default Package;
