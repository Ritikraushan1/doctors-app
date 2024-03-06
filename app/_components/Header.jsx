"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


function Header() {
    const Menu = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Explore', path: '/explore' },
        { id: 3, name: 'About Us', path: '/about' },
        { id: 4, name: 'Appointments', path: '/appointments' },
        { id: 4, name: 'Contact Us', path: '/contact' },
    ]

    return (
        <header className=' shadow-sm max-w-10xl'>
            <nav className=' flex items-center justify-between h-24'>
                <div className="">
                    <span></span>
                    <Image src='/assets/image.png' width={180} height={80} alt='Fixxit Physio' />
                </div>
                <div className=' sm:hidden'>
                    <ul className=' flex gap-10'>
                        {Menu.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div>
                    <Button>Getting Started</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header