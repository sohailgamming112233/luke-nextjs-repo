"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, href: "https://twitter.com/yourusername" },
  { icon: <FaYoutube />, href: "https://youtube.com/yourchannel" },
];

const Socials = () => {
  return (
    <div className="flex gap-4 mt-6 items-center justify-center lg:justify-start">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors text-2xl"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
