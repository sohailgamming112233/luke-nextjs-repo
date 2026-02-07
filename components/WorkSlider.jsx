"use client";
import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSlider = ({ swiper }) => {
  if (!swiper) return null;

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 rounded-full bg-black/60 backdrop-blur
                   flex items-center justify-center
                   hover:bg-accent transition-all duration-300"
      >
        <PiCaretLeftBold className="text-white text-xl" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 rounded-full bg-black/60 backdrop-blur
                   flex items-center justify-center
                   hover:bg-white text-white transition-all duration-300"
      >
        <PiCaretRightBold className="text-white text-xl " />
      </button>
    </>
  );
};

export default WorkSlider;
