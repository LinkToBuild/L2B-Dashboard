"use client";

import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// 1. Define the specific dimensions requested
const SIZES = {
  sm: { width: 164, height: 30 }, // Small variant
  md: { width: 180, height: 44 }, // Medium variant
  lg: { width: 270, height: 38 }, // Large variant
  xl: { width: 331, height: 44 }, // Extra Large variant
} as const;

type SizeVariant = keyof typeof SIZES;

// 2. Extend standard TextFieldProps to keep it dynamic (placeholder, type, onChange, etc.)
interface CustomInputProps extends Omit<TextFieldProps, "size"> {
  sizeVariant?: SizeVariant;
}

// 3. Create a Styled component to handle the custom dimensions safely
const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "sizeVariant",
})<{ sizeVariant: SizeVariant }>(({ sizeVariant,fullWidth }) => ({
  width: fullWidth ? "100%" : SIZES[sizeVariant].width,

  // 1. Lock the outer container height
  "& .MuiInputBase-root": {
    height: SIZES[sizeVariant].height,
    borderRadius: "8px",
    padding: 0, // Strip any hidden parent padding
  },

  // 2. Force the inner <input> tag to center the text
  "& .MuiInputBase-input": {
    height: "100%", 
    boxSizing: "border-box", // Prevents padding from breaking the height
    padding: "0 14px !important", // The !important kills MUI's default 16.5px padding
    lineHeight: "normal", // Resets text alignment
  },

  // 3. Fix the label alignment if you ever pass a 'label="Search"' prop
  "& .MuiInputLabel-root": {
    transform: `translate(14px, ${sizeVariant === "sm" ? "7px" : "12px"}) scale(1)`,
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -9px) scale(0.75)",
  },
}));

export const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(
  ({ sizeVariant = "md", ...props }, ref) => {
    return (
      <StyledTextField
        ref={ref}
        sizeVariant={sizeVariant}
        variant="outlined" // Default to outlined as per MUI standard
        {...props} // Spread dynamic props: type, placeholder, value, onChange, label, etc.
      />
    );
  },
);

CustomInput.displayName = "CustomInput";
