"use client";

import * as React from "react";
 import {IndividualTicketScreen} from "@/features/tickets/screen/TicketIndividualScreen"
 import { TicketScreen } from "@/features/tickets/screen/TicketScreen";
 export default function TicketPage() {

  return (
    <>
      <div className="px-8 py-5 min-h-screen bg-[#F8F9FA]">
        {/* <TicketScreen /> */}
          <IndividualTicketScreen />;
      </div>
    </>
  );
}



