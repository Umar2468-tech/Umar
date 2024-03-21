import React from 'react'
import about4 from '../assets/about4.jpeg'

const About = () => {
    return (
        <div className='text-white py-10 h-auto bg-[#232325]'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-screen-lg mx-auto'>
                <div>
                    <div className='w-[400px] h-full'>
                        <img src={about4} alt="" className='object-cover h-[300px] bg-gray-700 rounded-xl filter grayscale brightness-50 ' />
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <div className='text-gray300 my-3'>
                            <h2 className='text-4xl font-bold mb-5'>About <span className='primary-text'>Me</span></h2>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa. Harum fugiat, nisi unde adipisci accusamus iste fugit sequi soluta necessitatibus cumque possimus provident non rem! Sint a dolore modi minus doloribus possimus. Autem quis saepe nemo doloremque! Dicta, rem!
                            </p>

                        </div>
                    </div>

                    <div className='flex mt-10 items-center gap-10'>
                        <div className='bg-[#333333]/40 p-2 rounded-lg'>
                            <h3 className='text-2xl md:text-3xl font-semibold text-white'>
                                11
                                <span className='primary-text'>
                                    +
                                </span>
                            </h3>
                            <p className='primary-text font-bold '> <span>Projects </span>
                               
                            </p>

                        </div>

                        <div className='bg-[#333333]/40 p-3 rounded-lg'>
                            <h3 className='text-2xl md:text-xl font-semibold text-white'>
                                5
                                <span className='primary-text'>
                                    +
                                </span>
                            </h3>
                            <p className='primary-text font-bold'> <span>Happy Clients </span>
                               
                            </p>

                        </div>

                        <div className='bg-[#333333]/40 p-3 rounded-lg'>
                            <h3 className='text-2xl md:text-xl font-semibold text-white'>
                                1
                                <span className='primary-text'>
                                    +
                                </span>
                            </h3>
                            <p className='primary-text font-bold '> <span>year experience </span>
                               
                            </p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default About