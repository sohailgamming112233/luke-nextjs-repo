"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import State from "@/components/State";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section className="bg-black text-white px-4 sm:px-6">
      {/* Hero */}
      <div
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center
        gap-8 lg:gap-20 min-h-[100svh] lg:min-h-screen pt-20 lg:pt-0"
      >
        {/* Left */}
        <div className="flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <span className="text-lg sm:text-xl text-gray-400">
            Software Developer
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Hello I'm <br />
            <span className="text-blue-500">Luke Coleman</span>
          </h1>

          <p className="max-w-[420px] text-white/80 text-base sm:text-lg">
            I craft elegant digital experiences using modern web technologies.
          </p>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 text-black w-full sm:w-auto"
            >
              Download CV
              <FiDownload className="text-xl" />
            </Button>
          </div>

          <Socials />
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center mb-6 lg:mb-0">
          <Photo />
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto py-12">
        <State />
      </div>
    </section>
  );
}
