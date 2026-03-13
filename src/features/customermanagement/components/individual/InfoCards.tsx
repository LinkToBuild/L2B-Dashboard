import React from "react";
import { DualMetricCard } from "@/shared/components/DualMetricCard";
import { StatCard } from "@/shared/excomponent/ui/StatCard";

// Define a unified type for the data array
type CardData = 
  | ({ type: "dual" } & React.ComponentProps<typeof DualMetricCard>)
  | ({ type: "stat" } & React.ComponentProps<typeof StatCard>);

export function InfoCards() {
  const cards: CardData[] = [
    {
      type: "dual",
      title: "Active Orders",
      percentage: -20.89,
      rentalValue: 10,
      materialValue: 109,
      information: "Active orders breakdown",
    },
    {
      type: "dual",
      title: "Total Orders",
      percentage: -20.89, // Note: Image shows 2043983 as a secondary stat, adjust props if needed
      rentalValue: 1090,
      materialValue: 809,
      information: "Total orders breakdown",
    },
    {
      type: "stat",
      title: "Total Sale",
      value: "₹ 10,90,00",
      percentage: -20.89,
      information: "Total sales summary",
    },
    {
      type: "stat",
      title: "Failed Orders",
      value: "203",
      percentage: -20.89,
      information: "Failed orders summary",
    },
    {
      type: "stat",
      title: "Ticket",
      value: "203/1000",
      percentage: -20.89,
      information: "Support tickets summary",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between">
      {cards.map((card, index) => {
        if (card.type === "dual") {
          return <DualMetricCard key={index} {...card} />;
        }
        return <StatCard key={index} {...card} />;
      })}
    </div>
  );
}