"use client";

import React from "react";
import { cn } from "@/lib/utils";

const SectionWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("w-full", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
