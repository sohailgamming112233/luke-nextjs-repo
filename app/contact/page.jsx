"use client";

import { motion } from "framer-motion";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 342 645 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "example@email.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bucharest, Romania",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center text-white"
    >
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 px-4">
        {/* Form */}
        <div className="bg-white/5 p-8 rounded-xl">
          <form className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Let’s work together</h1>
              <p className="text-white/60 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis hic maxime rem consequuntur nisi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
              <Input type="email" placeholder="Email address" />
              <Input type="tel" placeholder="Phone number" />
            </div>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Services</SelectLabel>
                  <SelectItem value="frontend">Frontend Development</SelectItem>
                  <SelectItem value="backend">Backend Development</SelectItem>
                  <SelectItem value="fullstack">
                    Full Stack Development
                  </SelectItem>
                  <SelectItem value="uiux">UI / UX Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea placeholder="Your message" className="min-h-[120px]" />

            <Button className="w-full md:w-fit">Send message</Button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          {Info.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 p-6 rounded-xl"
            >
              <div className="text-accent text-2xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-white/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
