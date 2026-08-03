"use client";

import * as React from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import ConfirmationModal from "@/shared/components/FloatingPanel/ConfirmationModal";

type AssignSiteRow = {
  id: string;
  siteName: string;
  assigned: boolean;
};

interface AssignRemoveSiteModalProps {
  open: boolean;
  onClose: () => void;
  memberName?: string;
  memberCode?: string;
  onSave?: (updatedSites: AssignSiteRow[]) => void;
}

const INITIAL_SITE_DATA: AssignSiteRow[] = [
  { id: "1", siteName: "Site A", assigned: false },
  { id: "2", siteName: "Site B", assigned: false },
  { id: "3", siteName: "Site C", assigned: true },
  { id: "4", siteName: "Site D", assigned: true },
  { id: "5", siteName: "Site E", assigned: false },
  { id: "6", siteName: "Site F", assigned: false },
];

export function AssignRemoveSiteModal({
  open,
  onClose,
  memberName = "samadhan",
  memberCode = "#AD2435354",
  onSave,
}: AssignRemoveSiteModalProps) {
  const [siteRows, setSiteRows] =
    React.useState<AssignSiteRow[]>(INITIAL_SITE_DATA);

  const [isRemoveConfirmOpen, setIsRemoveConfirmOpen] = React.useState(false);
  const [selectedSiteId, setSelectedSiteId] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    if (open) {
      setSiteRows(INITIAL_SITE_DATA);
      setIsRemoveConfirmOpen(false);
      setSelectedSiteId(null);
    }
  }, [open]);

  const handleAddSite = (id: string) => {
    setSiteRows((prev) =>
      prev.map((site) =>
        site.id === id ? { ...site, assigned: true } : site
      )
    );
  };

  const handleOpenRemoveConfirm = (id: string) => {
    setSelectedSiteId(id);
    setIsRemoveConfirmOpen(true);
  };

  const handleCloseRemoveConfirm = () => {
    setIsRemoveConfirmOpen(false);
    setSelectedSiteId(null);
  };

  const handleConfirmRemove = () => {
    if (!selectedSiteId) return;

    setSiteRows((prev) =>
      prev.map((site) =>
        site.id === selectedSiteId ? { ...site, assigned: false } : site
      )
    );

    setIsRemoveConfirmOpen(false);
    setSelectedSiteId(null);
  };

  const handleSave = () => {
    onSave?.(siteRows);
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {!isRemoveConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 cursor-default rounded-none border-0 bg-transparent"
            aria-label="Close assign remove site modal"
          />

          <div className="relative h-[472px] w-[503px] rounded-[20px] bg-white px-[20px] pt-[18px] pb-[20px] shadow-xl">
            <div className="flex h-full flex-col items-center">
              <div className="flex h-[56px] w-[56px] items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="28"
                    cy="13"
                    r="9"
                    stroke="#56C293"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M14 40C14 31.7157 20.7157 25 29 25H31C36.5775 25 41.4458 28.0419 44.0414 32.5586"
                    stroke="#56C293"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M43 40L48 45L58 33"
                    stroke="#56C293"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="mt-[12px] flex w-[420px] items-center justify-between gap-[12px]">
                <h2 className="text-[16px] font-normal leading-[100%] text-[#1F1F1F]">
                  Assign / Remove {memberName} to site
                </h2>
                <span className="shrink-0 text-[16px] font-normal leading-[100%] text-[#1F1F1F]">
                  {memberCode}
                </span>
              </div>

              <div className="mt-[14px] h-[274px] overflow-y-scroll pr-[4px]">
                <div className="flex flex-col gap-[10px]">
                  {siteRows.map((site) => (
                    <div
                      key={site.id}
                      className="flex h-[46px] w-[420px] items-center justify-between rounded-[10px] border border-[#D9D9D9] bg-white px-[16px]"
                    >
                      <span className="text-[16px] font-normal leading-[100%] text-[#1F1F1F]">
                        {site.siteName}
                      </span>

                      <L2BButton
                        type="button"
                        variant="outline"
                        size="auto"
                        onClick={() =>
                          site.assigned
                            ? handleOpenRemoveConfirm(site.id)
                            : handleAddSite(site.id)
                        }
                        className={`flex h-[28px] min-w-[74px] items-center justify-center rounded-[10px] px-[14px] text-[16px] font-normal leading-[100%] ${
                          site.assigned
                            ? "border-neutral-5 bg-white text-danger-1"
                            : "border-success-1 bg-white text-success-1"
                        }`}
                      >
                        {site.assigned ? "Remove" : "Add"}
                      </L2BButton>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-[18px] flex w-[420px] items-center justify-between gap-[18px]">
                <L2BButton
                  onClick={onClose}
                  variant="outline"
                  size="large"
                  radius="rounded-[8px]"
                  textSize="text-[16px]"
                  fontWeight="font-normal"
                >
                  Cancel
                </L2BButton>

                <L2BButton
                  onClick={handleSave}
                  variant="primary"
                  size="large"
                  radius="rounded-[8px]"
                  textSize="text-[16px]"
                  fontWeight="font-normal"
                >
                  Save Changes
                </L2BButton>
              </div>
            </div>
          </div>
        </div>
      )}

      <ConfirmationModal
        open={isRemoveConfirmOpen}
        type="removeTeamMember"
        onConfirm={handleConfirmRemove}
        onCancel={handleCloseRemoveConfirm}
      />
    </>
  );
}