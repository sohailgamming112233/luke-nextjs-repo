  "use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

const servicesData = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build fast, scalable, and fully responsive websites using modern web technologies. From landing pages to complex web applications, I focus on performance, clean code, and long-term maintainability to ensure your product grows smoothly with your business needs.",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "I specialize in crafting visually appealing and user-friendly interfaces with React, Next.js, and Tailwind CSS. My goal is to deliver pixel-perfect designs, smooth animations, and an intuitive user experience that keeps users engaged across all devices.",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "I develop secure and scalable backend systems including REST APIs, authentication, and database management. With a strong focus on performance and security, I ensure seamless communication between frontend and backend for reliable applications.",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description:
      "As a full-stack developer, I handle everything from UI design to server-side logic. I create complete, end-to-end web solutions that are efficient, scalable, and tailored to meet real-world business requirements.",
  },
  {
    num: "05",
    title: "UI / UX Design",
    description:
      "I design clean and intuitive user interfaces with a strong emphasis on usability and accessibility. By understanding user behavior and design principles, I create experiences that not only look great but also feel natural and easy to use.",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Services</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative border border-white/10 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <span className="text-blue-500 text-2xl font-bold">
                {service.num}
              </span>

              <h3 className="text-xl font-semibold mt-4">
                {service.title}
              </h3>

              <p className="text-white/70 mt-2 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow Bottom Right */}
              <motion.div
                whileHover={{ rotate: 45 }}
                className="absolute bottom-5 right-5 text-blue-500 text-2xl"
              >
                <FiArrowDownRight />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
