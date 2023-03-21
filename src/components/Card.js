import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";

function Card(props) {

    let review = props.review;

    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute  z-[20] mx-auto -left-[3rem] sm:left-0 top-[-4rem] sm:-top-[7rem] ">
                <img className="aspect-square rounded-full w-[100px] z-[20] sm:w-[140px] " src={review.image} ></img>
                <div className="w[100px] h-[100px] sm:w-[140px] sm:h-[140px] bg-violet-500 rounded-full absolute    sm:-top-[0.4rem] z-[-1] sm:left-[0.5rem]"></div>
            </div>

            <div className="mt-7 text-center">
                <p className="font-bold text-2xl capitalize tracking-wide font-[Poppins]">{review.name}</p>
                <p className="text-violet-300 uppercase hover:text-violet-500 transition-all duration-200">{review.job}</p>
            </div>

            <div className="text-violet-400 mt-5">
                < FaQuoteLeft />
            </div>

            <div className="text-slate-500 mt-4 text-center font-[Montserrat]">
                {review.text}
            </div>

            <div className="text-violet-400 mt-5">
                <FaQuoteRight />
            </div>



        </div>
    );
};
export default Card;