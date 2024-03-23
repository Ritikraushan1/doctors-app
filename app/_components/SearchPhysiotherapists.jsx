import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        </div>
    );
}

export default SearchPhysiotherapists;
