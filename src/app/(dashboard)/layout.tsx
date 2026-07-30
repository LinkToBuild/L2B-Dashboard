"use client";

import React, { useState } from "react";
import { Sidebar } from "@/shared/components/Sidebar";
import QueryProvider from "../QueryProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <QueryProvider>
      <div className="relative h-screen w-full overflow-hidden bg-white">
        {/* Sidebar stays fixed on the left */}
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/*
          Content shell:
          - ml-24 clears the collapsed sidebar rail
          - max-w-[1440px] + mx-auto: past 1440px page stays centered, no wider
        */}
        <main className="h-screen w-full overflow-y-auto bg-gray-50">
          <div className="ml-24 min-h-full">
            {/* All dashboard screens inherit: cap 1440, center when wider */}
            <div className="mx-auto w-full max-w-[1440px]">{children}</div>
          </div>
        </main>
      </div>
    </QueryProvider>
  );
}
