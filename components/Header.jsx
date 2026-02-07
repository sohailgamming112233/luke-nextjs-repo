import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "@/components/MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-4 sm:py-6 xl:py-8 text-white bg-black fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
        >
          Luke <span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6 sm:gap-8">
          <Nav />
          <Button asChild variant="default" size="default">
            <Link
              href="/contact"
              className="px-4 sm:px-5 py-2 text-black font-medium"
            >
              Hire me
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
