import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <>
            <section>
                <div className=' mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
                    <div className=' grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center'>
                        <div className=' lg:py-24'>
                            <div className=''>
                                <div>
                                    <h2 className=' text-4xl font-bold sm:text-4xl'>
                                        <span>Find & Book </span>
                                        <span className=' text-blue-700'>Appointment </span>
                                        <span>With<br /> Your fav </span>
                                        <span className=' text-blue-700'>Physiotherapists</span>
                                    </h2>
                                </div>
                                <div className='mt-6 text-gray-500'>
                                    <p className=' leading-7'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                                    </p>
                                </div>
                                <div className=' mt-6'>
                                    <Button>Explore Now</Button>
                                </div>
                            </div>
                        </div>
                        <div className=" relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image src='/assets/8443649.jpg' width={650} height={550} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero