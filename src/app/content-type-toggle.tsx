'use client';

import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { AircraftInfoTypeProps } from "./aircraft-info";

interface ContentTypeToggleGroupProps {
  onContentTypeChange: (contentType: AircraftInfoTypeProps) => void;
}

export function ContentTypeToggleGroup({ onContentTypeChange }: ContentTypeToggleGroupProps) {
  const [contentType, setContentType] = useState<AircraftInfoTypeProps>({ infoType: "info" });
  return (
    <ToggleGroup
      type="single"
      value={contentType.infoType}
      onValueChange={(contentType) => {
        if (contentType) {
          setContentType({
            infoType: contentType as "info" | "history"
          });
          onContentTypeChange({
            infoType: contentType as "info" | "history"
          });
        }
      }}
    >
      <ToggleGroupItem className="h-10 w-30" value="info" aria-label="Toggle Info">
        Info
      </ToggleGroupItem>
      <ToggleGroupItem className="h-10 w-30" value="history" aria-label="Toggle History">
        History
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
