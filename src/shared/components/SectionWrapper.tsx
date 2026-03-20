"use client";
import React from "react";

const SectionWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
      <section className={`w-full  ml-24   ${className}`}>
        {children}
      </section>
 
  );
};

export default SectionWrapper;
