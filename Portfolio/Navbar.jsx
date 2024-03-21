import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const link = [
        {
            id: 1,
            list: "Home"
        },
        {
            id: 2,
            list: "About"
        },
        {
            id: 3,
            list: "Services"
        },
        {
            id: 4,
            list: "Portfolio"
        },
        {
            id: 5,
            list: "ContactUs"
        },

    ]
    return (
        <div className=' p-2'>
            <div className='max-w-screen-lg flex justify-between items-center mx-auto'>
                <div className='text-4xl primary-color'>
                    Portfolio
                </div>

                {nav ? <AiOutlineClose onClick={() => setNav(!nav)} className='flex md:hidden text-white' size={25} /> : <AiOutlineMenu className='flex md:hidden text-white' onClick={() => setNav(!nav)} size={25} />}
                <ul className='hidden md:flex gap-10 text-gray-500 text-[17px]'>
                    {link.map(({ id, list }) => (

                        <li key={id} className='hover:scale-125 duration-300 cursor-pointer'>
                            {list}

                        </li>
                    ))}
                </ul>

                <ul className={` duration-1000  text-gray-300 border-r border-r-gray-900 bg-[#202121] fixed left-[-100%] top-[0px] w-[50%] h-full text-[20px] z-10
                ${nav ? 'left-[0]' : "left-[-100%] "}
                `}>
                    {link.map(({ id, list }) => (

                        <li key={id} className='hover:scale-125 duration-500 cursor-pointer py-4 px-10'>
                            {list}

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar