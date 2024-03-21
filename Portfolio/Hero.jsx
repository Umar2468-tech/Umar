import React from 'react'
import profilepic5 from '../assets/profilepic5.png'
import { TypeAnimation } from 'react-type-animation'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className=' max-w-[1080px] h-[80vh] mx-auto flex flex-col-reverse justify-center align-center sm:flex-row'>
            <div className=' flex flex-col my-auto mx-auto'>
                <p className='text-xl md:text-4xl sm:text-3xl font-bold text-gray-100 '>
                    Hi! I am MuhammadUmar
                </p>
                <h1 className='text-xl md:text-3xl sm:text-4xl font-bold my-4'>
                    <TypeAnimation
                        sequence={[
                            'Junior FrontEnd Developer',
                            1000,
                            'Web Developer',
                            1000,
                            'Web Designer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <div className='flex justify-center items-center'>
                        <p className='text-gray-500 text-xl my-2 md:text-4xl sm:text-4xl font-bold'>with a 1+ Years of experience </p>
                    </div>
                    <div className='flex my-4 text-4xl gap-16 cursor-pointer text-purple-800'>
                       <a href="https://www.linkedin.com/in/muhammad-umar-630083257/" target="_blank"><AiFillLinkedin/></a>  
                        <a href="https://github.com/Umar2468-tech" target='_blank'><AiFillGithub/></a> 
                        <a href="https://www.Instagram.com/m._.umar._.3568" target="_blank"> <AiFillInstagram/></a>
                    </div>
                    <div className='relative inline-flex group my-4'>

                        <div className=' transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100
                        group-hover:-inset-1  group-hover:duration-200 '>

                            <a href='/Resume.pdf' title='Download CV' role='button' className='w-[200px] h-[50px] relative inline-flex justify-center items-center px-4 py-4 text-lg font-bold text-white  transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 '>
                                Download Cv
                            </a>

                        </div>

                    </div>
                </h1>

            </div>
            {/* <div className='text-4xl'>
                text
            </div> */}
            <div className='my-auto'>
                <img src={profilepic5} alt="" className='w-[220px] sm:w-[500px] h-auto mx-auto rounded-full' />
            </div>
        </div>
    )
}

export default Hero