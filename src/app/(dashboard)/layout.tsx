"use client";

import React, { useState } from "react";
import { Sidebar } from "@/shared/components/Sidebar";
import { cn } from "@/lib/utils";
import QueryProvider from "../QueryProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <QueryProvider>
      <div className="relative h-screen w-full bg-white overflow-hidden">
        {/* Sidebar overlays on top */}
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main content stays in place, no padding shift */}
        <main className="h-screen w-full overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </QueryProvider>
  );
}
