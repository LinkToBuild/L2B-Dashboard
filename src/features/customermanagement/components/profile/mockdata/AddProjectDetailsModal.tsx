// "use client";

// import * as React from "react";
// import { ActionTablePanel } from "@/shared/components/ActionTablePanel";
// import { CustomInput } from "@/shared/excomponent/ui/TextField";
// import { Button } from "@/shared/excomponent/ui/UIButton";

// interface AddProjectDetailsModalProps {
//   open: boolean;
//   onClose: () => void;
//   onNext?: (formData: {
//     siteLocation: string;
//     plotOrHouseNo: string;
//     areaLocalityStreetName: string;
//     pinCode: string;
//   }) => void;
// }

// export function AddProjectDetailsModal({
//   open,
//   onClose,
//   onNext,
// }: AddProjectDetailsModalProps) {
//   const [formData, setFormData] = React.useState({
//     siteLocation: "",
//     plotOrHouseNo: "",
//     areaLocalityStreetName: "",
//     pinCode: "",
//   });

//   const handleChange =
//     (key: keyof typeof formData) =>
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setFormData((prev) => ({
//         ...prev,
//         [key]: event.target.value,
//       }));
//     };

//   const handleNext = () => {
//     onNext?.(formData);
//     console.log("Add project details:", formData);
//     onClose();
//   };

//   return (
//     <ActionTablePanel
//       open={open}
//       onClose={onClose}
//       title="Add Project details"
//       showTitle={true}
//       showInfoIcon={false}
//       showCloseIcon={false}
//       width="w-[635px]"
//       maxHeight="max-h-[342px]"
//       showTextField={true}
//       textField={
//         <div className=" w-full rounded-[16px] border border-[#E5E5E5] w-[598px] h-[188px] p-4 ">
//           <div className="grid grid-cols-2 gap-x-5 gap-y-5">
//             <div className="flex flex-col gap-2 ">
//               <label className="text-[12px] font-medium text-neutral-400">
//                 Site Location
//               </label>
//               <CustomInput
//                 sizeVariant="lg"
//                 fullWidth
//                 placeholder="New bel road.New bel road.."
//                 value={formData.siteLocation}
//                 onChange={handleChange("siteLocation")}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-[12px] font-medium text-neutral-400">
//                 Plot/House no.
//               </label>
//               <CustomInput
//                 sizeVariant="lg"
//                 fullWidth
//                 placeholder="gfgsgsgdws"
//                 value={formData.plotOrHouseNo}
//                 onChange={handleChange("plotOrHouseNo")}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-[12px] font-medium text-neutral-400">
//                 Area, Locality, or Street Name
//               </label>
//               <CustomInput
//                 sizeVariant="lg"
//                 fullWidth
//                 placeholder="wwrwetewte"
//                 value={formData.areaLocalityStreetName}
//                 onChange={handleChange("areaLocalityStreetName")}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-[12px] font-medium text-neutral-400">
//                 Pin code
//               </label>
//               <CustomInput
//                 sizeVariant="lg"
//                 fullWidth
//                 placeholder="413114"
//                 value={formData.pinCode}
//                 onChange={handleChange("pinCode")}
//               />
//             </div>
//           </div>
//         </div>
//       }
//       showTable={false}
//       showButtons={true}
//       buttonCount={1}
//       buttons={
//         <div className="flex justify-end">
//           <Button
//             onClick={handleNext}
//             className="min-w-[118px] min-h-[40px] rounded-[8px] !bg-[#FEB637] hover:!bg-[#e3a92f] !text-black"
//           >
//             Next
//           </Button>
//         </div>
//       }
//     />
//   );
// }

export const addProjectDetailsMockData = {
  initialValues: {
    siteLocation: "",
    plotOrHouseNo: "",
    areaLocalityStreetName: "",
    pinCode: "",
  },
  placeholders: {
    siteLocation: "New bel road.New bel road..",
    plotOrHouseNo: "gfgsgsgdws",
    areaLocalityStreetName: "wwrwetewte",
    pinCode: "413114",
  },
};