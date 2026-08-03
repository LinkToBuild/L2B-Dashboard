import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface L2BButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The color theme of the button */
  variant?: "primary" | "auxiliary" | "bgNone" | "outline" | "danger" | "ghost";
  /** Fixed CTA sizes, or auto/icon for links and icon-only controls */
  size?: "small" | "medium" | "large" | "full" | "auto" | "icon";
  /** If true, shows a spinner and disables the button */
  isLoading?: boolean;
  textSize?: string;
  radius?: string;
  fontWeight?: string;
  textColor?: string;
}

export const L2BButton = React.forwardRef<HTMLButtonElement, L2BButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      isLoading = false,
      textSize,
      fontWeight,
      textColor,
      radius,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // 1. Color Variant Mapping (Using your Link2Build theme classes)
    const variants = {
      primary: "bg-primary-2 text-white hover:bg-primary-2 shadow-sm",
      auxiliary: "bg-aux-1 text-white hover:bg-aux-2 shadow-sm",
      outline: "bg-transparent border border-neutral-4 text-neutral-2 hover:bg-neutral-7",
      bgNone: "bg-transparent ",
      danger: "bg-danger-1 text-white hover:bg-danger-2 shadow-sm",
      ghost: "bg-neutral-7  hover:text-neutral-1 hover:bg-neutral-6",
    };

    // 2. Fixed Size Mapping (Exactly as you specified)
    const sizes = {
      small: "w-[88px] h-[35px] ",
      medium: "w-[118px] h-[42px] ",
      large: "w-[200px] h-[40px] ",
      full: "w-full h-[40px] ",
      auto: "w-auto h-auto px-0 py-0",
      icon: "w-auto h-auto p-2",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles applied to ALL buttons
          "inline-flex place-items-center justify-center  font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-3 focus:ring-offset-1",
          // Disabled state styles
          "disabled:opacity-50 disabled:pointer-events-none",
          // Apply the selected variant and size
          variants[variant],
          sizes[size],
          textSize,
          fontWeight,
          radius,
          textColor,
          // Allow custom overrides via className prop
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

L2BButton.displayName = "L2BButton";



// Example

{/* <L2BButton 
  variant="outline" 
  size="large"
  textSize="text-[18px]" 
  fontWeight="font-extrabold" 
  textColor="text-primary-1"
>
  Custom Styled Button
</L2BButton> */}