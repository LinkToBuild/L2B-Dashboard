import React from 'react';
import { Pencil } from 'lucide-react';
import { StatusBadge } from '@/shared/excomponent/ui/Chip';
import { L2BButton } from '@/design-system/components/L2BButton';

// Define exactly what data each card needs
export interface TeamCardProps {
  teamName: string;
  performance: "Good" | "Bad" | "Decent";
  badgeStatus: "successLight" | "dangerLight" | "warningLight";
  managerName: string;
  totalMembers: number;
  onEdit?: () => void;
}

export default function TeamCard({ 
  teamName, 
  performance, 
  badgeStatus, 
  managerName, 
  totalMembers, 
  onEdit 
}: TeamCardProps) {
  return (
    <div className="flex flex-col justify-between w-full h-[105px] p-4 border border-[#EEEEEE] rounded-[10px] bg-white shadow-sm mb-4 last:mb-0">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-gray-800">
          {teamName}
        </h3>
        
        <div className="flex items-center gap-6">
          {/* Using your custom StatusBadge with the correct props */}
          <StatusBadge 
            status={badgeStatus} 
            label={`Performance : ${performance}`} 
          />

          <L2BButton
            type="button"
            variant="bgNone"
            size="auto"
            onClick={onEdit}
            className="flex items-center gap-2 text-[14px] font-medium text-success-1 hover:opacity-80 transition-opacity"
          >
            Edit 
            <span className="flex items-center justify-center w-[26px] h-[26px] bg-success-1 rounded text-white">
              <Pencil size={14} strokeWidth={2.5} />
            </span>
          </L2BButton>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between text-[14px] text-gray-500 font-medium">
        <p>Manager : {managerName}</p>
        <p>Total Member : {totalMembers}</p>
      </div>

    </div>
  );
}