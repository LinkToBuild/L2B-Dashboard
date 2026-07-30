
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  LogOut,
  Plus,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/navigation";
import logoImg from "@/public/images/l2b-dashboard-logo.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleField } from "@/shared/excomponent/ui/ToggleField";

const SIDEBAR_USER = {
  name: "Abhishek Dugar",
  email: "abhishek.greda@demo.com",
  role: "Admin (L1)",
  avatarUrl: "/images/avt2.jpg",
  initials: "AD",
};

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function Sidebar({ isOpen, onToggle, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [showLabels, setShowLabels] = useState(isOpen);
  const [showActiveHighlight, setShowActiveHighlight] = useState(isOpen);
  const [isProfileAvailable, setIsProfileAvailable] = useState(true);

  const isCollapsed = !isOpen && !isMobile;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen || isMobile) {
      setActiveTooltip(null);
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    let labelTimer: ReturnType<typeof setTimeout>;
    let highlightTimer: ReturnType<typeof setTimeout>;

    if (isOpen) {
      setShowLabels(false);
      setShowActiveHighlight(false);

      labelTimer = setTimeout(() => {
        setShowLabels(true);
      }, 300);

      highlightTimer = setTimeout(() => {
        setShowActiveHighlight(true);
      }, 600);
    } else {
      setShowLabels(false);
      setShowActiveHighlight(true);
    }

    return () => {
      clearTimeout(labelTimer);
      clearTimeout(highlightTimer);
    };
  }, [isOpen]);

  return (
    <aside
      className={cn(
        "bg-white transition-all duration-300 flex flex-col fixed h-screen z-50",
        "shadow-[4px_0_15px_0_rgba(0,0,0,0.1)]",
        isMobile ? (isOpen ? "w-64" : "w-0") : isOpen ? "w-76" : "w-[100px]",
        isMobile && !isOpen ? "-translate-x-full" : "translate-x-0",
      )}
    >
      <div className="p-4 flex items-center justify-between relative min-h-[90px]">
        <div className={cn("flex items-center gap-3")}>
          <div
            className={cn(
              "w-[57px] h-[56px] flex justify-center items-center rounded-[10px] bg-white",
              "shadow-l2b-soft shadow-md",
            )}
          >
            <Image src={logoImg} alt="Logo" className="h-[20px] w-[47px]" />
          </div>
          <div
            className={cn(
              "flex flex-col transition-all duration-300 ease-in-out",
              showLabels
                ? "opacity-100 translate-x-0 w-auto"
                : "opacity-0 -translate-x-4 w-0 overflow-hidden pointer-events-none",
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

        <button
          onClick={() => {
            setActiveTooltip(null);
            onToggle();
          }}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 -right-4 z-50 rounded-[8px]",
            "p-1.5 bg-white border border-gray-200 transition-all",
            "shadow-l2b-soft shadow-md",
            "flex items-center justify-center",
          )}
        >
          {!isOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <TooltipProvider delayDuration={180}>
        <nav
          className={cn(
            "flex flex-col flex-1 min-h-0 px-2 py-4 gap-y-[14px] overflow-y-auto",
            !isOpen && !isMobile ? "w-full items-center px-0" : "self-start",
          )}
        >
          {navigationItems.map((item) => (
            <Tooltip
              key={item.path}
              open={activeTooltip === item.path && !isOpen && !isMobile}
              onOpenChange={(open) => {
                setActiveTooltip(open ? item.path : null);
              }}
            >
              <TooltipTrigger asChild>
                <Link
                  href={item.path}
                  onClick={() => {
                    setActiveTooltip(null);
                    onClose();
                  }}
                  className={cn(
                    "flex items-center rounded-lg transition-colors text-[16px]",
                    isCollapsed
                      ? "h-12 w-12 justify-center gap-0 p-0"
                      : "gap-2 px-3 py-2",
                    pathname === item.path && showActiveHighlight
                      ? "bg-[#FFEDCD] text-[#FEA405]"
                      : "hover:bg-[#FFEDCD] hover:text-[#FEA405]",
                  )}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                      draggable={false}
                    />
                  </div>

                  {!isCollapsed && (
                    <span
                      className={cn(
                        "whitespace-nowrap transition-all duration-300",
                        showLabels
                          ? "w-auto translate-x-0 opacity-100"
                          : "pointer-events-none w-0 -translate-x-4 overflow-hidden opacity-0",
                      )}
                    >
                      {item.name}
                    </span>
                  )}
                </Link>
              </TooltipTrigger>

              {!isOpen && !isMobile && (
                <TooltipContent
                  side="right"
                  sideOffset={12}
                  className="w-max min-w-[209px] h-[40px] whitespace-nowrap rounded-[8px] bg-neutral-6 px-4 py-0 flex items-center text-[16px] font-normal text-neutral-1 border border-neutral-5"
                  style={{
                    boxShadow:
                      "0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.30)",
                  }}
                >
                  {item.name}
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>

      {/* Profile footer — opens menu; menu items are UI-only for now */}
      <div
        className={cn(
          "shrink-0 mt-auto pb-4",
          isCollapsed ? "flex justify-center px-0" : "px-3",
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {isCollapsed ? (
              <button
                type="button"
                className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-3"
                aria-label="Open profile menu"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={SIDEBAR_USER.avatarUrl}
                    alt={SIDEBAR_USER.name}
                  />
                  <AvatarFallback className="bg-neutral-6 text-neutral-2 text-xs font-medium">
                    {SIDEBAR_USER.initials}
                  </AvatarFallback>
                </Avatar>
              </button>
            ) : (
              <button
                type="button"
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-xl border border-neutral-5 bg-white px-2.5 py-2 text-left",
                  "outline-none transition-opacity duration-300",
                  "hover:bg-neutral-7 focus-visible:ring-2 focus-visible:ring-primary-3",
                  showLabels ? "opacity-100" : "opacity-0",
                )}
              >
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarImage
                    src={SIDEBAR_USER.avatarUrl}
                    alt={SIDEBAR_USER.name}
                  />
                  <AvatarFallback className="bg-neutral-6 text-neutral-2 text-xs font-medium">
                    {SIDEBAR_USER.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium leading-tight text-neutral-1">
                    {SIDEBAR_USER.name}
                  </p>
                  <p className="mt-0.5 truncate text-xs leading-tight text-neutral-3">
                    {SIDEBAR_USER.email}
                  </p>
                </div>

                <ChevronRight
                  size={16}
                  className="shrink-0 text-neutral-4"
                  aria-hidden
                />
              </button>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="right"
            align="end"
            sideOffset={12}
            className="w-[260px] rounded-xl border border-neutral-5 bg-white p-2 text-neutral-1 shadow-l2b-soft"
          >
            <div className="flex items-center gap-3 px-2 py-2.5">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage
                  src={SIDEBAR_USER.avatarUrl}
                  alt={SIDEBAR_USER.name}
                />
                <AvatarFallback className="bg-neutral-6 text-neutral-2 text-xs font-medium">
                  {SIDEBAR_USER.initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-neutral-1">
                  {SIDEBAR_USER.name}
                </p>
                <p className="truncate text-xs text-neutral-3">
                  {SIDEBAR_USER.role}
                </p>
              </div>
            </div>

            <DropdownMenuSeparator className="bg-neutral-5" />

            <DropdownMenuItem
              onSelect={(event) => event.preventDefault()}
              className="cursor-default gap-2 rounded-lg px-2 py-2.5 focus:bg-neutral-7"
            >
              <User className="size-4 text-neutral-2" />
              <span className="flex-1 text-sm text-neutral-1">
                Profile (Available)
              </span>
              <ToggleField
                checked={isProfileAvailable}
                onChange={setIsProfileAvailable}
              />
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={(event) => event.preventDefault()}
              className="cursor-default gap-2 rounded-lg px-2 py-2.5 focus:bg-neutral-7"
            >
              <Clock className="size-4 text-neutral-2" />
              <span className="text-sm text-neutral-1">Permissions</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={(event) => event.preventDefault()}
              className="cursor-default gap-2 rounded-lg px-2 py-2.5 focus:bg-neutral-7"
            >
              <Plus className="size-4 text-neutral-2" />
              <span className="text-sm text-neutral-1">Add Account</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={(event) => event.preventDefault()}
              className="cursor-default gap-2 rounded-lg px-2 py-2.5 focus:bg-neutral-7"
            >
              <LogOut className="size-4 text-neutral-2" />
              <span className="text-sm text-neutral-1">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}


