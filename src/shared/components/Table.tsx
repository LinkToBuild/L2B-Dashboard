"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Define the structure for each column configuration
export interface ColumnConfig<T> {
  header: string;
  key: keyof T | string;
  align?: "left" | "right" | "center";
  width?: number | string;
  // This allows you to render custom components like your StatusBadge
  render?: (value: any, item: T) => React.ReactNode;
}

interface DynamicTableProps<T> {
  columns: ColumnConfig<T>[];
  data: T[];
  minWidth?: number;
  maxHeight?: number | string;
}

export function DynamicTable<T>({
  columns,
  data,
  minWidth = 650,
  maxHeight = "500px",
}: DynamicTableProps<T>) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        border: "1px solid #E1E1E1",
        borderRadius: "12px",
        overflow: "auto",
        maxHeight: maxHeight,

        "&::-webkit-scrollbar": {
          width: "7px", 
          height: "7px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#880808", 
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
        },
        "&::-webkit-scrollbar-button": {
          display: "none !important",
          width: "0px !important",
          height: "0px !important",
          WebkitAppearance: "none !important", 
        },
        "&::-webkit-scrollbar-button:vertical:start:decrement, &::-webkit-scrollbar-button:vertical:end:increment":
          {
            display: "none !important",
          },
        "&::-webkit-scrollbar-button:horizontal:start:decrement, &::-webkit-scrollbar-button:horizontal:end:increment":
          {
            display: "none !important",
          },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#C1C1C1",
          borderRadius: "30px",
          "&:hover": {
            backgroundColor: "#A8A8A8", 
          },
        },

       
        scrollbarWidth: "thin",
        scrollbarColor: "#FFFFFF #E1E1E1",
      }}
    >
      <Table aria-label="dynamic table">
        <TableHead
          sx={{
            background: "linear-gradient(180deg, #FFFEFE 0%, #FFF0D8 100%)",
          }}
        >
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                align={column.align || "left"}
                sx={{
                  fontWeight: 600,
                  color: "#8E8E8E",
                  fontSize: "12px",
                  borderBottom: "1px solid #E1E1E1",
                }}
              >
                {column.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "#F5F5F5" },
              }}
            >
              {columns.map((column, colIndex) => {
                const value =
                  column.key in (item as any)
                    ? (item as any)[column.key]
                    : null;

                return (
                  <TableCell
                    key={colIndex}
                    align={column.align || "left"}
                    sx={{
                      color: "#1F1F1F",
                      fontSize: "12px",
                      minWidth: column.width || "150px",
                      padding: "24px 16px", 
                      position: "relative",
                      borderBottom: "1px solid #E1E1E1", 
                      borderRight: "none", 

                     
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)", // Centers the line vertically
                        height: "40px", // Fixed height for that 'floating' look
                        width: "1px",
                        backgroundColor: "#E1E1E1",
                        display:
                          colIndex === columns.length - 1 ? "none" : "block", // Hide for last column
                      },
                    }}
                  >
                    {/* If a custom render function exists, use it; otherwise, show plain text */}
                    {column.render ? column.render(value, item) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
