"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import image1 from "../../app/work/image.png";
import image2 from "../../app/work/fullStack.png";
import image3 from "../../app/work/frontend.png";
import WorkSlider from "../../components/WorkSlider";

const projects = [
  {
    num: "01",
    category: "Photo Graph",
    title: "Project1",
    description:
      "A creative photography project showcasing images with a modern UI.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: image1,
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Project1",
    description:
      "A full-stack application using Next.js for frontend and Node.js for backend.",
    stack: [{ name: "next.js" }, { name: "Tailwind Css" }, { name: "node.js" }],
    image: image2,
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project1",
    description:
      "A frontend project featuring responsive design and interactive UI components.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: image3,
    live: "#",
    github: "#",
  },
];
const Page = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container m-30 px-4 sm:px-6 lg:px-0 mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          {/* Left Side Content */}
          <div className="w-full xl:w-1/2 flex flex-col justify-between mb-8 xl:mb-0">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="text-4xl sm:text-8xl font-extrabold text-transparent text-outline leading-none">
                {project.num}
              </div>
              <h2 className="text-2xl sm:text-[42px] font-bold text-white capitalize leading-snug sm:leading-none">
                {project.category} project
              </h2>
              <p className="text-sm sm:text-base text-white/60">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-sm sm:text-xl">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 sm:w-[70px] h-10 sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl sm:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 sm:w-[70px] h-10 sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl sm:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Slider */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="relative h-[300px] sm:h-[400px] xl:h-[520px]"
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full flex justify-center items-center bg-pink-50/20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlider
                swiper={swiper}
                containerStyles="flex gap-2 absolute right-4 z-20 bottom-[calc(50%_-_22px)]"
                btnStyles="w-10 h-10 bg-black/70 hover:bg-accent transition flex items-center justify-center"
                iconsStyles="text-white text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
