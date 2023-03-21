import React, { useState, useEffect } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



function Testimonial({ reviews }) {

    const [id,setId] = useState(0);

    function leftShiftHandler() {
        if(id === 0){
            setId(reviews.length - 1);
        }
        else{
            setId(id-1);
        }
    }
    
    function rightShiftHandler() {
        if(id === reviews.length -1){
            setId(0);
        }
        else{
            setId(id+1);
        }
    }

    function surpriseHandler() {
        setId(Math.floor(Math.random() * reviews.length));
    }


    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-5 p-10 transition-all duration-700 hover:shadow-2xl">
            <Card review={reviews[id]} />

            <div className="flex text-3xl mt-7 gap-3 text-violet-400 fon-bold mx-auto">
                <button className="hover:text-violet-500 transition-all duration-200"
                    onClick={leftShiftHandler}>
                    <FiChevronLeft />
                </button>
                <button className="hover:text-violet-500 transition-all duration-200"
                    onClick={rightShiftHandler}>
                    <FiChevronRight />
                </button>
            </div>

            <div className="mt-5">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md fonr-bold text-white  text-lg "
                    onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>

        </div>
    )
}

export default Testimonial;