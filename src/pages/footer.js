import React, { Component } from 'react'
import logo from '../components/img/logo.png'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaPinterestP, FaLinkedinIn } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div>


                <footer class="bg-[#211E3B]  py-10 ">
                    <div class="mx-auto w-full max-w-screen-xl">
                        <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2">
                            <div>
                                <div>
                                    <img src={logo} alt="" className='w-40' />
                                </div>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum .</p>

                            </div>
                            <div>
                                <h2 class="mb-6 sm:text-[22px] text-[20px] font-semibold text-white uppercase relative">Quick Links
                                <div className='absolute h-[2px] w-[70px] bg-[#fc5b63]'></div></h2>
                                <ul class="text-white  font-medium">
                                    <li class="mb-2">
                                        <Link to="/" class="transition hover:text-[#fc5b63]">Home</Link>
                                    </li>
                                    <li class="mb-2">
                                        <Link to="/package"  class="transition hover:text-[#fc5b63]">Package</Link>
                                    </li>
                                    <li class="mb-2">
                                        <Link to="/sign-in" class="transition hover:text-[#fc5b63]">Sign In</Link>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Blog</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 sm:text-[22px] text-[20px] font-semibold text-white uppercase  relative">About Us
                                <div className='absolute h-[2px] w-[70px] bg-[#fc5b63]'></div></h2>
                                <ul class="text-white  font-medium">
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Our Story</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Travel Blog & Tips</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">gallerying With Us</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Tour Guid</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Be Our Partner</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 sm:text-[22px] text-[20px] font-semibold text-white uppercase relative">Support
                                <div className='absolute h-[2px] w-[70px] bg-[#fc5b63]'></div></h2>
                                <ul class="text-white  font-medium">
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Customer Support</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Privacy & Policy</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Terms & Condition</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Forum</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="transition hover:text-[#fc5b63]">Tour Guid</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr class="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8 lg:mb-4" />
                        <span class="block  text-white text-center text-base  ">© Copyright @ 2023<a href=""> Laveria </a>all right reserved.</span>
                        <ul className='flex justify-center text-white py-3'>
                            <li className='px-[6px]'><a href="" className='hover:text-[#fc5b63] transition'><BsFacebook /></a></li>
                            <li className='px-[6px]'><a href="" className='hover:text-[#fc5b63] transition'><BsTwitter /></a></li>
                            <li className='px-[6px]'><a href="" className='hover:text-[#fc5b63] transition'><FaPinterestP /></a></li>
                            <li className='px-[6px]'><a href="" className='hover:text-[#fc5b63] transition'><FaLinkedinIn /></a></li>
                            <li className='px-[6px]'><a href="" className='hover:text-[#fc5b63] transition'><TfiYoutube /></a></li>
                        </ul>
                    </div>
                </footer>


            </div>
        )
    }
}

export default Footer
