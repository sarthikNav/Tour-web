import React, { useState } from 'react'
import image from '../components/img/section-bg.jpg'
import '../App.css'
const Sign_up = () => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [name, setName] = useState()
  const [last, setLast] = useState()

   let obj = {
    name:name,
    email:email,
    pass:pass
   }

  const AddHandler = () => {

    localStorage.setItem('email', obj.email)
    localStorage.setItem('Password', obj.pass)

    setEmail('')
    setName('')
    setLast('')
    setPass('')
  }
  return (
    <div>
      <section>
        <div className="w-full">
          <div className=" relative">
            <img src={image} width='100%' className='sm:h-[300px] h-[220px]' alt="" />
            <div className='absolute top-0 bg-black/50 h-full w-full  '></div>
            <div class="hero-text absolute md:top-40 sm:top-28 top-16 sm:left-24 left-10 sm:right-24 right-10 text-center text-white">
              <h1 className='font-bold md:text-[50px] text-[40px] font-serif'>
                SING UP
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-screen-xl my-20">

          <div className='grid md:justify-center justify-normal px-4'>
            <div className='shadow-lg shadow-slate-900 px-14 py-10 relative rounded-md'>
              <form>
                <div class="relative z-0 w-full mb-6 group">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={last} onChange={(e) => setLast(e.target.value)} name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                  </div>
                </div>

                <button type='button' onClick={ AddHandler} class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
              </form>

              <div className="absolute -top-7 left-[50%] translate-x-[-50%] z-10">
                <div className="bg-blue-600 text-white font-semibold md:text-[30px] py-2 px-8 rounded-md">Sign Up</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sign_up
