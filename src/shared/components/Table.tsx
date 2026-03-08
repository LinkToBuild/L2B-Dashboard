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
}

export function DynamicTable<T>({
  columns,
  data,
  minWidth = 650,
}: DynamicTableProps<T>) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        border: "1px solid #E1E1E1",
        borderRadius: "12px",
        overflow: "auto",
      }}
    >
      <Table aria-label="dynamic table">
        <TableHead sx={{ background: "linear-gradient(180deg, #FFFEFE 0%, #FFF0D8 100%)" }}>
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
                      padding: "24px 16px", // Increased padding to make the cell taller
                      position: "relative", // Required for the absolute line to position correctly
                      borderBottom: "1px solid #E1E1E1", // Horizontal row line
                      borderRight: "none", // Disable standard border

                      // The "Levitating" Vertical Line
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
