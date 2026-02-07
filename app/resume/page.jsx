"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaAws,
  FaDocker,
  FaPhp,
} from "react-icons/fa";

// --- DATA ---
const aboutData = {
  title: "About Me",
  description:
    "I am a passionate software developer with a strong focus on building modern, responsive, and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive digital solutions.",
  info: [
    { label: "Name", value: "Luke Coleman" },
    { label: "Experience", value: "5+ Years" },
    { label: "Email", value: "luke@email.com" },
    { label: "Location", value: "Remote / Worldwide" },
    { label: "Phone", value: "+92 300 1234567" },
    { label: "Freelance", value: "Available" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Languages", value: "English, Urdu" },
    { label: "GitHub", value: "github.com/luke" },
    { label: "LinkedIn", value: "linkedin.com/in/luke" },
    { label: "Experience Level", value: "Senior" },
    { label: "Timezone", value: "GMT +5" },
  ],
};

const experienceData = {
  title: "Experience",
  description:
    "I have hands-on experience building and scaling modern web and e-commerce applications, focusing on performance, user experience, and business growth.",
  items: [
    { company: "Ecom Store (Shopify / Custom)", position: "E-commerce Frontend Developer", duration: "2023 – Present" },
    { company: "Tech Solutions Ltd", position: "Senior Frontend Developer", duration: "2022 – 2023" },
    { company: "Online Marketplace", position: "Full Stack Developer", duration: "2021 – 2022" },
    { company: "Creative Agency", position: "React / Next.js Developer", duration: "2020 – 2021" },
    { company: "Freelance", position: "E-commerce & Web Developer", duration: "2018 – 2020" },
    { company: "Startup Hub", position: "Frontend Engineer", duration: "2017 – 2018" },
    { company: "Digital Labs", position: "Junior Web Developer", duration: "2016 – 2017" },
    { company: "AppWorks", position: "React Developer Intern", duration: "2015 – 2016" },
    { company: "NextGen Tech", position: "UI/UX Developer", duration: "2014 – 2015" },
    { company: "Web Creators", position: "Frontend Intern", duration: "2013 – 2014" },
    { company: "CodeCrafters", position: "Junior Frontend Developer", duration: "2012 – 2013" },
    { company: "Freelance Projects", position: "Web Developer", duration: "2011 – 2012" },
  ],
};

const education = {
  title: "Education",
  description:
    "I have completed my formal education in computer science and web development, with hands-on projects and practical experience.",
  items: [
    { institute: "University of Technology", degree: "B.Sc. in Computer Science", duration: "2015 – 2019" },
    { institute: "Tech Academy", degree: "Full Stack Web Development Bootcamp", duration: "2020" },
    { institute: "Online Courses (Coursera / Udemy)", degree: "Web Development & E-commerce", duration: "2018 – 2023" },
    { institute: "Advanced JavaScript Course (Pluralsight)", degree: "JavaScript & Modern Frameworks", duration: "2019 – 2020" },
    { institute: "UI/UX Design Academy", degree: "User Interface & Experience Design", duration: "2017 – 2018" },
    { institute: "Python Programming Bootcamp", degree: "Python & Automation", duration: "2016 – 2017" },
    { institute: "Freelance Learning Projects", degree: "Self-Taught Web Development & E-commerce", duration: "2012 – 2016" },
  ],
};

const skillsData = {
  title: "My Skills",
  description: "These are some of the technologies and tools I work with:",
  items: [
    { name: "React", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
    { name: "CSS3 / Tailwind", icon: <FaCss3Alt className="text-blue-600 w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
    { name: "Python", icon: <FaPython className="text-blue-300 w-8 h-8" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 w-8 h-8" /> },
    { name: "Database / SQL", icon: <FaDatabase className="text-gray-400 w-8 h-8" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400 w-8 h-8" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500 w-8 h-8" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500 w-8 h-8" /> },
  ],
};

// --- MOTION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="bg-black text-white py-16 ">
      <div className="container mx-auto px-4 max-w-5xl m-10">
        {/* ABOUT ME */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          {aboutData.title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-white/80 leading-relaxed mb-10 max-w-3xl"
        >
          {aboutData.description}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {aboutData.info.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg p-4"
            >
              <span className="text-blue-500 text-sm font-semibold">{item.label}</span>
              <p className="text-white/80 text-sm mt-1 break-words">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          {experienceData.title}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-white/70 max-w-3xl mb-8"
        >
          {experienceData.description}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {experienceData.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-lg font-semibold text-blue-500">{item.position}</h4>
              <p className="text-white/80">{item.company}</p>
              <span className="text-sm text-white/60">{item.duration}</span>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          {education.title}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-white/70 max-w-3xl mb-8"
        >
          {education.description}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {education.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-lg font-semibold text-blue-500">{item.degree}</h4>
              <p className="text-white/80">{item.institute}</p>
              <span className="text-sm text-white/60">{item.duration}</span>
            </motion.div>
          ))}
        </div>

        {/* SKILLS */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          {skillsData.title}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-white/70 max-w-3xl mb-8"
        >
          {skillsData.description}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skillsData.items.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center border border-white/10 rounded-xl p-6"
            >
              {skill.icon}
              <p className="text-white/80 text-sm mt-2 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
