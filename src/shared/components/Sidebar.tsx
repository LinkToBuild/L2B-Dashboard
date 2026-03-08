"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/navigation";
import logoImg from "@/public/images/l2b-dashboard-logo.png";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function Sidebar({ isOpen, onToggle, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <aside
      className={cn(
        "bg-white  transition-all duration-300 flex flex-col fixed h-screen z-50  ",
        "shadow-[4px_0_15px_0_rgba(0,0,0,0.1)]",
        isMobile ? (isOpen ? "w-64" : "w-0") : isOpen ? "w-76" : "w-[100px]",
        isMobile && !isOpen ? "-translate-x-full" : "translate-x-0",
      )}
    >
      {/* Header */}
      {/* <div className="p-4 border-b flex items-center justify-between relative">
        <div className={cn("flex", !isOpen && "hidden")}>
          <div className={cn(" w-[57px] h-[56px] flex justify-center place-items-center rounded-[10px] ","shadow-l2b-soft shadow-md")}>
            <Image src={logoImg} alt="Logo" className="h-[20px] w-[47px] " />
          </div>
          <div>
            <p>LINK 2 BUILD</p>
            <p>Link2build@demo.com</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          className={cn(
            "p-1 bg-white rounded-md border border-gray-100 transition-all",
            "shadow-l2b-soft shadow-md", // Your custom Figma shadow!
            !isOpen && "mx-auto",
          )}
        >
          {!isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div> */}
      {/* Header */}
      <div className="p-4  flex items-center  justify-between relative min-h-[90px] ">
        <div className={cn("flex items-center gap-3")}>
          <div
            className={cn(
              "w-[57px] h-[56px] flex justify-center items-center rounded-[10px] bg-white",
              "shadow-l2b-soft shadow-md", // Applying Figma shadow
            )}
          >
            <Image src={logoImg} alt="Logo" className="h-[20px] w-[47px]" />
          </div>
          <div
            className={cn(
              "flex flex-col transition-all duration-300 ease-in-out",
              // If open: fade in after 200ms delay. If closed: hide immediately.
              isOpen
                ? "opacity-100 translate-x-0 delay-200"
                : "opacity-0 -translate-x-4 delay-0 pointer-events-none",
            )}
          >
            <p className="font-bold text-[16px] leading-tight text-gray-900 whitespace-nowrap">
              LINK 2 BUILD
            </p>
            <p className="text-[10px] text-gray-400 whitespace-nowrap">
              Link2build@demo.com
            </p>
          </div>
        </div>

        {/* Toggle Button - Shifted to Right Border */}
        <button
          onClick={onToggle}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 -right-4 z-50 rounded-[8px]", // Absolute positioning trick
            "p-1.5 bg-white  border border-gray-200 transition-all",
            "shadow-l2b-soft shadow-md ", // Hover effects
            "flex items-center justify-center",
          )}
        >
          {!isOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-2 py-4 gap-y-[14px] overflow-y-auto  place-self-center">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={onClose}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-[16px]",
              pathname === item.path
                ? "hover:bg-[#FFEDCD] hover:text-[#FEA405]"
                : "hover:bg-[#FFEDCD] hover:text-[#FEA405]",
            )}
          >
            <Image
              src={item.icon}
              alt="icon"
              width={24}
              height={24}
              className="max-w-6 max-h-6"
            />
            <span
              className={cn(
                "transition-all duration-300 whitespace-nowrap",
                isOpen
                  ? "opacity-100 translate-x-0 delay-200 w-auto"
                  : "opacity-0 -translate-x-4 delay-0 w-0 overflow-hidden pointer-events-none",
              )}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
