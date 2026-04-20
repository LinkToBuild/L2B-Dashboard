
"use client";
import * as React from "react";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { TicketDivergingBarChart } from "@/shared/excomponent/charts/DivergingBarChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";

export function TicketMetricsWidget() {
  const chartData = [
    {
      label: "Total Chat Concern : 1090",
      positive: 260,
      negativeMain: -78,
      negativeSecondary: -58,
      negativeBottom: -52,
    },
    {
      label: "Total Call Concern : 1090",
      positive: 335,
      negativeNearZero: -12,
      negativeSecondary: -38,
    },
    {
      label: "Total Ticket : 1090",
      positive: 260,
      negativeMain: -78,
      negativeSecondary: -58,
    },
  ];

  const statCards = [
    {
      title: "Due Today",
      value: 31,
      information: "Total tickets due today",
      percentage: null,
      dotColor: null,
    },
    {
      title: "Resolved",
      value: 144,
      information: "Resolved tickets",
      percentage: -20.89,
      dotColor: "#6CC39A",
    },
    {
      title: "Escalated",
      value: 3,
      information: "Escalated tickets",
      percentage: -20.89,
      dotColor: "#D6E7F4",
    },
    {
      title: "Assigned",
      value: 70,
      information: "Assigned tickets",
      percentage: null,
      dotColor: "#8FB3D7",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-[12px]">
      <div className="relative z-20 w-full">
        <TableToolBar
          title="Your Tickets"
          showSearch={false}
          showFilter={true}
          showInfo={true}
        />
      </div>

      <div className="flex h-[570px] w-[665px] rounded-[16px] border border-neutral-5 bg-white px-[14px] py-[14px] overflow-hidden">
        <div className="flex w-full min-w-0 gap-[14px]">
          <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden">
            <TicketDivergingBarChart
              data={chartData}
              width={350}
              height={430}
              barWidth={18}
              barCategoryGap="8%"
              min={-300}
              max={350}
              interval={50}
              grid={{
                left: 32,
                right: 4,
                top: 10,
                bottom: 14,
              }}
              colors={{
                positive: "#6CC39A",
                negativeNearZero: "#4E89C7",
                negativeMain: "#4E89C7",
                negativeSecondary: "#94B7D8",
                negativeBottom: "#C3D8E8",
                axisLine: "#AFAFAF",
                splitLine: "#CFCFCF",
                labelColor: "#B3B3B3",
                yAxisLabelColor: "#8D8D8D",
                zeroLine: "#9E9E9E",
                background: "#FFFFFF",
              }}
            />
          </div>

          <div className="flex w-[232px] shrink-0 flex-col gap-[12px] pt-[12px]">
            {statCards.map((card) => (
              <div key={card.title} className="relative">
                {card.dotColor ? (
                  <span
                    className="absolute left-[16px] top-[18px] z-10 h-[9px] w-[9px] rounded-full"
                    style={{ backgroundColor: card.dotColor }}
                  />
                ) : null}

                <div
                  className={[
                    "[&>div]:!w-[232px]",
                    "[&>div]:!h-[98px]",
                    "[&>div]:!rounded-[12px]",
                    "[&>div]:!border",
                    "[&>div]:!border-neutral-5",
                    "[&>div]:!shadow-none",
                    "[&>div]:!px-[12px]",
                    "[&>div]:!py-[10px]",
                    "[&>div]:![background:linear-gradient(180deg,#F6FAFE_0%,#F6FAFE_55%,#FDFDFD_100%)]",
                    "[&>div_div:first-child]:!h-auto",
                    "[&>div_div:first-child]:!items-start",
                    "[&>div_div:first-child]:!justify-between",
                    card.dotColor ? "[&>div]:!pl-[28px]" : "",
                  ].join(" ")}
                >
                  <StatCard
                    title={card.title}
                    value={card.value}
                    percentage={card.percentage}
                    information={card.information}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}