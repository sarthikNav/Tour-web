import React, { Component } from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import { PiAtThin } from 'react-icons/pi'

export class Contect extends Component {
    render() {
        return (
            <div>
                <section className='lg:py-20 md:py-16 py-10'>
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className='text-center pb-10'>
                            <p className='text-[#fc5b62]'>Contact Us</p>
                            <h1 className='md:text-[30px] text-2xl font-semibold '>If You Have Any Question <br />Drop A Message</h1>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center px-4 md:px-10'>

                            <div>
                                <ul className='md:flex block justify-between '>
                                    <li><input type="text" placeholder='Name' className='md:w-72 w-full md:mb-0 mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  placeholder:text-base focus:ring-[#fc5b63] focus:border-[#fc5b63] block p-2.5 ' name="" id="" /></li>
                                    <li><input type="text" placeholder='Email' className='md:w-72 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded placeholder:text-base  focus:ring-[#fc5b63] focus:border-[#fc5b63] block p-2.5 ' name="" id="" /></li>
                                </ul>

                                <input type="text" placeholder='Subject' className='w-full my-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded placeholder:text-base focus:ring-[#fc5b63] focus:border-[#fc5b63] block p-2.5' name="" id="" />

                                <textarea placeholder='your message' name="message" id="" cols="70" rows="5" className='w-full bg-gray-50 border border-gray-300 placeholder:text-lg text-gray-900 text-sm rounded focus:ring-[#fc5b63] focus:border-[#fc5b63] block p-2.5'></textarea>
                                <button type="button" class="text-white bg-[#fc5b62;] font-medium rounded md:text-lg text-base px-7 py-2.5 text-center inline-flex items-center mt-5 ">
                                    Send Message
                                </button>
                            </div>
                            <div className='lg:px-10 py-5 '>
                                <ul>
                                    <li className='flex pb-3 gap-2'>
                                        <div className="icon h-[55px] w-[55px] rounded-full text-white bg-[#fc5b62]   flex justify-center items-center">
                                            <FaLocationDot className='absolute text-[24px]' />
                                        </div>
                                        <p>2369 Robinson Lane Jackson <br />OH 45640</p>
                                    </li>
                                    <li className='flex pb-3 gap-2'>
                                        <div className="icon h-[55px] w-[55px] rounded-full text-white bg-[#fc5b62]  flex justify-center items-center">
                                            <BiSupport className='absolute text-[24px]' />
                                        </div>
                                        <p><li>(+1) 740-395-3829</li>
                                            <li> (+1) 740-982-9821</li>
                                        </p>
                                    </li>
                                    <li className='flex pb-3 gap-2'>
                                        <div className="icon h-[55px] w-[55px] rounded-full text-white bg-[#fc5b62]   flex justify-center items-center">
                                            <PiAtThin className='absolute text-[24px]' />
                                        </div>
                                        <p><li>help@Laveria.com</li>
                                            <li>info@Laveria.com</li>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50320.39100496163!2d145.032004!3d-37.976559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1696044724946!5m2!1sen!2sbd" className='w-full h-[450px] border-none' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>

            </div>
        )
    }
}

export default Contect
