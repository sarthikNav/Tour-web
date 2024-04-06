import React, { Component } from 'react'
import CountUp from 'react-countup';
import { FaUsersLine ,FaHandshakeSimple} from 'react-icons/fa6'
import {BsFillAirplaneFill,BsDot} from 'react-icons/bs'
import {BiSupport} from'react-icons/bi';

export class Counter extends Component {
    render() {

        return (
            <div>
                <section className='bg-[#211E3B] py-20'>
                    <div className="mx-auto w-full max-w-screen-xl px-4">
                        <div className="text-center">
                            <p className='text-[#fc5b62] mb-2'>Company Statistics</p>
                            <h2 className='md:text-[30px] text-2xl font-semibold text-white'>We Expert Our Goals & We Strive <br />To Provide Best</h2>
                        </div>
                        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                            <div className="py-8 px-4 text-center bg-black/10 text-white rounded-md">
                                <FaUsersLine className='text-[40px] mx-auto mb-2' />
                                <CountUp delay={2} end={32649} separator='' className='text-4xl font-bold' />
                                <h1 className='text-xl mt-2 flex justify-center items-center'>Happy Customers <span className='h-2 w-2 rounded-full bg-[#fc5b62] ms-2'></span></h1>
                            </div>
                            <div className="py-8 px-4 text-center bg-black/10 text-white rounded-md">
                                <BsFillAirplaneFill className='text-[40px] mx-auto mb-2'/>
                                <CountUp delay={2} end={1821} separator='' className='text-4xl font-bold' />
                                <h1 className='text-xl mt-2 flex justify-center items-center'>Amazing Tours  <span className='h-2 w-2 rounded-full bg-[#fc5b62] ms-2'></span></h1>
                            </div>
                            <div className="py-8 px-4 text-center bg-black/10 text-white rounded-md">
                                <FaHandshakeSimple className='text-[40px] mx-auto mb-2'/>
                                <CountUp delay={2} end={5660} separator='' className='text-4xl font-bold' />
                                <h1 className='text-xl mt-2 flex justify-center items-center'>In Business <span className='h-2 w-2 rounded-full bg-[#fc5b62] ms-2'></span></h1>
                            </div>
                            <div className="py-8 px-4 text-center bg-black/10 text-white rounded-md">
                                <BiSupport  className='text-[40px] mx-auto mb-2'/>
                                <CountUp delay={2} end={11858} separator='' className='text-4xl font-bold' />
                                <h1 className='text-xl mt-2 flex justify-center items-center'>Support Cases  <span className='h-2 w-2 rounded-full bg-[#fc5b62] ms-2'></span></h1>
                            </div>
                        </div>
                    </div>


                </section>

            </div>
        )
    }
}

export default Counter
