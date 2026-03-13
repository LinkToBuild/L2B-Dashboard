"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

interface TableToolBarProps {
  title?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void; // Made optional in case search is hidden
  showTitle?: boolean;
  showInfo?: boolean;
  showSearch?: boolean;
  showFilter?: boolean;
}

export function TableToolBar({ 
  title = "Campaign Report", 
  searchValue, 
  onSearchChange,
  showTitle = true,
  showInfo = true,
  showSearch = true,
  showFilter = true
}: TableToolBarProps) {
  const [filter, setFilter] = useState<string>("Completed");
  const filterMenuItems = [
    { label: "Completed", onClick: () => setFilter("Completed") },
    { label: "Schedule", onClick: () => setFilter("Started") },
    { label: "Active", onClick: () => setFilter("Arrived") },
    { label: "Pause", onClick: () => setFilter("Canceled") },
  ];

  return (
    <div>
      <div className="flex justify-between place-items-center">
        
        {/* Left Side: Title and Info Icon */}
        <div className="flex gap-[10px] place-items-center ">
          {showTitle && (
            <p className="text-[24px] text-neutral-2 font-normal">{title}</p>
          )}
          {showInfo && (
            <Info className="w-4 h-4 text-neutral-3" />
          )}
        </div>

        {/* Right Side: Search and Filter */}
        <div className="flex gap-[18px]">
          {showSearch && (
            <CustomInput
              sizeVariant="lg"
              label="Search"
              type="search"
              value={searchValue}
              // Safely call onSearchChange only if it exists
              onChange={(e: any) => onSearchChange && onSearchChange(e.target.value)} 
            />
          )}

          {showFilter && (
            <L2BDropdownMenu
              trigger={
                <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
                  <ListFilter size={25} />
                </button>
              }
              items={filterMenuItems}
            />
          )}
        </div>
        
      </div>
    </div>
  );
}



// "use client";

// import * as React from "react";
// import { useState } from "react";
// import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
// import { ListFilter, Info } from "lucide-react";
// import { CustomInput } from "@/shared/excomponent/ui/TextField";

// interface FilterMenuItem {
//   label: string;
//   onClick?: () => void;
// }

// interface TableToolBarProps {
//   title?: string;
//   searchValue?: string;
//   onSearchChange?: (value: string) => void;
//   showTitle?: boolean;
//   showInfo?: boolean;
//   showSearch?: boolean;
//   showFilter?: boolean;
//   filterItems?: FilterMenuItem[];
//   defaultFilterLabel?: string;
// }

// export function TableToolBar({
//   title = "Campaign Report",
//   searchValue,
//   onSearchChange,
//   showTitle = true,
//   showInfo = true,
//   showSearch = true,
//   showFilter = true,
//   filterItems,
//   defaultFilterLabel = "Completed",
// }: TableToolBarProps) {
//   const [filter, setFilter] = useState<string>(defaultFilterLabel);

//   const defaultFilterMenuItems: FilterMenuItem[] = [
//     { label: "Completed", onClick: () => setFilter("Completed") },
//     { label: "Schedule", onClick: () => setFilter("Schedule") },
//     { label: "Active", onClick: () => setFilter("Active") },
//     { label: "Pause", onClick: () => setFilter("Pause") },
//   ];

//   const itemsToUse = (filterItems ?? defaultFilterMenuItems).map((item) => ({
//     label: item.label,
//     onClick: () => {
//       setFilter(item.label);
//       item.onClick?.();
//     },
//   }));

//   return (
//     <div>
//       <div className="flex justify-between place-items-center">
//         <div className="flex gap-[10px] place-items-center">
//           {showTitle && (
//             <p className="text-[24px] text-neutral-2 font-normal">{title}</p>
//           )}
//           {showInfo && (
//             <Info className="w-4 h-4 cursor-help text-neutral-3" />
//           )}
//         </div>

//         <div className="flex gap-[18px]">
//           {showSearch && (
//             <CustomInput
//               sizeVariant="lg"
//               label="Search"
//               type="search"
//               value={searchValue}
//               onChange={(e: any) =>
//                 onSearchChange && onSearchChange(e.target.value)
//               }
//             />
//           )}

//           {showFilter && (
//             <L2BDropdownMenu
//               trigger={
//                 <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
//                   <ListFilter size={25} />
//                 </button>
//               }
//               items={itemsToUse}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }