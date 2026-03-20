// src/features/agentsprofile/screen/AgentScreen.tsx
"use client";

// import { useAgentProfileViewModel } from "../viewModel/useAgentProfileViewModel";
// import { AdminProfileLayout } from "./AdminProfileLayout";
// import { ManagerProfileLayout } from "./ManagerProfileLayout";
// import { SupportProfileLayout } from "./SupportProfileLayout";
import L1profileLayout from "./L1profileLayout";
import L2profileLayout from "./L2profileLayout";
// import L3profileLayout from "./L3profileLayout";

interface AgentScreenProps {
  userLevel: "L1" | "L2" | "L3";
  userId: string;
}

export function AgentScreen({ userLevel, userId }: AgentScreenProps) {
  // 1. Your ViewModel fetches the data based on the ID and Level
//   const { data, isLoading } = useAgentProfileViewModel(userId, userLevel);

//   if (isLoading) return <div>Loading profile...</div>;

  // 2. The Strategy Pattern: Render the exact layout needed for the role
  switch (userLevel) {
    case "L1":
      return <L1profileLayout  />;
    case "L2":
      return <L2profileLayout/>;
    // case "L3":
    //   return <SupportProfileLayout data={data} />;
    default:
      return <div>Unauthorized Profile View</div>;
  }
}