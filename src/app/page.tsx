'use client';

import { useState } from "react";
import { ContentTypeToggleGroup } from "./content-type-toggle";
import LeftMenu from "./left-menu";
import RightMenu from "./right-menu";
import MainContent from "./main-content";
import { AircraftDetails, AircraftInfoTypeProps } from "./aircraft-info";

export default function Page() {
    const [contentType, setContentType] = useState<AircraftInfoTypeProps>({infoType: "info"});
    return (
        <>
            <div className="flex justify-between items-center">
                <LeftMenu />
                <div>
                    <MainContent />
                    <div className="flex flex-col">
                        <ContentTypeToggleGroup onContentTypeChange={setContentType} />
                        <AircraftDetails infoType={contentType.infoType} />
                    </div>
                </div>
                <RightMenu />
            </div>
        </>
    );
}