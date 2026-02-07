"use client";

import React, { useState } from "react";
import { FaHome, FaServicestack, FaFileAlt, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button"; 

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Services", path: "/services", icon: <FaServicestack /> },
  { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
  { name: "Work", path: "/work", icon: <FaBriefcase /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger */}
      <Button
        variant="default"
        size="icon"
        className="text-white text-2xl p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </Button>

      {/* Overlay / Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="flex flex-col mt-20 space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="flex items-center gap-4 text-lg hover:text-accent"
              onClick={() => setOpen(false)} // close menu on click
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Optional backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default MobileNav;
