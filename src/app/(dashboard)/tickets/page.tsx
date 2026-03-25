"use client";

// import * as React from "react";
import { TicketScreen } from "@/features/tickets/screen/TicketScreen";
import { Suspense } from "react";

export default function TicketPage() {
  return (
    <>
      <div className="px-8 py-5 min-h-screen bg-[#F8F9FA]">
        <Suspense
          fallback={
            <div className="p-8 text-neutral-3">Loading dashboard...</div>
          }
        >
          <TicketScreen />
        </Suspense>
      </div>
    </>
  );
}
