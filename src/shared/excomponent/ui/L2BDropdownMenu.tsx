"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// 1. Define what a single item in the menu looks like
export interface DropdownItem {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  shortcut?: string;
  isSeparator?: boolean; // A quick way to draw a line between items
}

// 2. Define the props for the wrapper component
interface L2BDropdownMenuProps {
  /** The button or icon that opens the menu */
  trigger: React.ReactNode;
  /** The list of menu items */
  items: DropdownItem[];
  /** Where the menu drops down relative to the trigger */
  align?: "start" | "center" | "end";
  /** Optional width or styling overrides for the menu box */
  className?: string;
}

export function L2BDropdownMenu({
  trigger,
  items,
  align = "end",
  className,
}: L2BDropdownMenuProps) {
  return (
    <DropdownMenu >
      {/* asChild allows us to pass our own custom L2BButton or icon as the trigger */}
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align={align} className={cn("w-40 border-none rounded-sm","shadow-[4px_0_15px_0_rgba(0.1,0.1,0.1,0.1)]", className)}>
        {items.map((item, index) => {
          // If the item is marked as a separator, render a line instead of text
          if (item.isSeparator) {
            return <DropdownMenuSeparator key={index} />;
          }

          return (
            <DropdownMenuItem
              key={index}
              onClick={item.onClick}
              disabled={item.disabled}
              className="cursor-pointer font-medium text-[16px]  text-neutral-2"
            >
              {item.label}
              {/* If a keyboard shortcut is provided, display it on the right */}
              {item.shortcut && (
                <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}