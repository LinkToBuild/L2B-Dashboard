"use client";

import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// 1. Define the specific dimensions requested
const SIZES = {
  sm: { width: 164, height: 30 }, // Small variant
  md: { width: 180, height: 44 }, // Medium variant
  lg: { width: 270, height: 44 }, // Large variant
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
})<{ sizeVariant: SizeVariant }>(({ sizeVariant }) => ({
  width: SIZES[sizeVariant].width,
  "& .MuiInputBase-root": {
    height: SIZES[sizeVariant].height,
    fontSize: sizeVariant === "sm" ? "12px" : "14px", // Adaptive font size for smaller height
  },
  // Ensure the label (if used) adjusts to the custom height
  "& .MuiInputLabel-root": {
    lineHeight: sizeVariant === "sm" ? "12px" : "inherit",
    transform: sizeVariant === "sm" ? "translate(14px, 7px) scale(1)" : undefined,
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
  }
);

CustomInput.displayName = "CustomInput";