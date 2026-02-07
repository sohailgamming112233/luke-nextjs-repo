"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "@/components/Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Stairs key={pathname} />
    </AnimatePresence>
  );
};

export default StairTransition;
