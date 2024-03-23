import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Orthopedic from '../../Assets/orthopedic.png'

function SearchPhysiotherapists() {
    return (
        <div className=" mb-10">
            <h2 className=" font-bold text-4xl flex items-center justify-center leading-10 tracking-wide">
                <p>
                    Search <span className=" text-blue-700"> Physiotherapists</span>
                </p>
            </h2>
            <div className=" mt-2">
                <p className=" flex items-center justify-center font-semibold text-gray-500 text-xl">
                    Search Physiotherapists and Book Appointment in One Click
                </p>
            </div>
            <div className=" flex items-center justify-center mt-3">
                <div className=" px-2">
                    <Input type="text" placeholder="Search..." />
                </div>
                <div>
                    <Button type="submit"><FaSearch className=" mr-2" />Search</Button>
                </div>
            </div>
            {/* Category Section Started here*/}
            <div className=" grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 ">
                <Link href="#" className=" flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out">
                    <Image src={Orthopedic} alt='icon' width={40} height={40} />
                    <label className='text-blue-600 text-sm'>Orthopedic</label>
                </Link>

            </div>
        </div>
    );
}

export default SearchPhysiotherapists;
