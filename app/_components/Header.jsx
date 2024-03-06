"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";

function Header() {
    const Menu = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Explore', path: '/explore' },
        { id: 3, name: 'About Us', path: '/about' },
        { id: 4, name: 'Appointments', path: '/appointments' },
        { id: 4, name: 'Contact Us', path: '/contact' },
    ]

    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <header>
            <nav className=' mx-auto flex items-center justify-between p-6 lg:p-8 max-w-7xl'>
                <div className='flex lg:flex-1'>
                    <a href="/">
                        <Image src='/assets/logo.png' width={100} height={100} className='' />
                    </a>

                </div>
                <div className=' flex lg:hidden'>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenu(true)}
                    >
                        <MdOutlineMenu className=' h-6 w-6' />
                    </button>
                </div>
                <div>
                    <ul className=' md:flex gap-8 hidden mx-auto lg:gap-x-12 relative'>
                        {Menu.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li className=' text-gray-500 hover:text-purple-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <Button>Getting Started</Button>
            </nav>
        </header >
    )
}

export default Header