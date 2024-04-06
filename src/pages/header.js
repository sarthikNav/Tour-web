import React, { Component} from 'react'
import logo from '../components/img/logo.png';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom";
import '../App.css'
export class Header extends Component {
    render() {
        let i = 1
        const MenuHandler = () => {
            if (i % 2 != 0) {
                document.getElementsByClassName('menu')[0].style.height = "165px"
            }
            else {
                document.getElementsByClassName('menu')[0].style.height = "0px"
            }
            i++
        }

        return (
            <>
                <header>
                    <div className='bg-[#211E3B] '>
                        <div className="mx-auto w-full max-w-screen-xl">
                            <div className='flex items-center py-2 justify-between mx-4'>
                                <div className="w-1/3 flex ">
                                    <Link to="/"><img src={logo} width='163px' height='36px' alt="" /></Link>
                                </div>
                                <div className="w-2/3 flex justify-end max-lg:relative">
                                    <div className=' duration-500 transition-all max-lg:hidden'>
                                        <ul className='flex demo max-lg:bg-white'>
                                            <li className='mx-4 py-1'><Link to="/" href="" className='a max-lg:text-blue-700 text-white font-bold'>HOME</Link></li>
                                            <li className='mx-4 py-1'><Link to="/package" href="" className='a max-lg:text-blue-700 text-white font-bold'>PACKAGE </Link></li>
                                            <li className='mx-4 py-1'><Link to="/gallery" className='a max-lg:text-blue-700 text-white font-bold'>GALLERY</Link></li>
                                           <li className='mx-4 py-1'><Link to="/Sign_up" className='a max-lg:text-blue-700 text-white font-bold'>SIGN UP</Link></li>
                                            <li className='mx-4 py-1'><Link to="/Singin" className='a max-lg:text-blue-700 text-white font-bold'>SIGN IN</Link></li>
                                </ul>
                                    </div>
                                </div>
                                <div id='add' className=' relative'>
                                        <FaBars onClick={MenuHandler} className='text-white text-xl lg:hidden sm:block'></FaBars>
        
                                       <div className="">
                                            <ul className='menu demo absolute max-lg:right-[-16px] z-[999] max-lg:top-[50px] lg:hidden'>
                                                <li onClick={MenuHandler} className='mx-4 py-1'><Link to="/" className='a max-lg:text-blue-700 text-white font-bold'>HOME</Link></li>
                                                <li onClick={MenuHandler} className='mx-4 py-1'><Link to="/package" className='a max-lg:text-blue-700 text-white font-bold'>PACKAGE </Link></li>
                                                <li onClick={MenuHandler} className='mx-4 py-1'><Link to="/gallery" className='a max-lg:text-blue-700 text-white font-bold'>GALLERY</Link></li>
                                               <li onClick={MenuHandler} className='mx-4 py-1'><Link to="/Sign_up" className='a max-lg:text-blue-700 text-white font-bold'>SIGN UP</Link></li>
                                                <li onClick={MenuHandler} className='mx-4 py-1'><Link to="/Singin" className='a max-lg:text-blue-700 text-white font-bold'>SIGN IN</Link></li>
                                                </ul>
                                       </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;
