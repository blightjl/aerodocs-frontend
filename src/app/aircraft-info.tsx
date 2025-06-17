export interface AircraftInfoTypeProps {
    infoType: "info" | "history";
}

const InfoContent = () => {
    return (<div>
        <b>Origin:</b>United States<br />
        <b>Manufacturer:</b> Lockheed Aircraft Corporation<br />
        <b>First Flight:</b> December 22, 1964<br />
        <b>Service Entry:</b> January , 1966<br />
        <b>Height:</b> 18 ft 6 in (5.64 m)<br />
        <b>Wingspan:</b> 55 ft 7 in (16.94 m)<br />
        <b>Length:</b> 107 ft 5 in (32.74 m)<br />
        <b>Top Speed:</b> Mach 3.2 (≈2,200 mph; ~3,540 km/h)<br />
        <b>Service Ceiling:</b> ~85,000 ft (~25,900 m)<br />
        <b>Crew (Passengers):</b> 2
    </div>)
};

const HistoryContent = () => {
    return (<div>
        <p>The SR‑71 Blackbird, developed from the earlier A‑12 project in the late 1950s by Lockheed’s secretive Skunk Works under Clarence Johnson, made its maiden flight on December 22, 1964, and officially entered service in January 1966. Constructed largely from titanium and coated with heat-radiating black paint, it was designed to surpass the U‑2 spy plane in speed and altitude to avoid enemy defenses. Capable of sustained speeds over Mach 3 and cruising at around 85,000 ft, the Blackbird collected intelligence across hostile territories during the Cold War without a single loss to enemy fire. It set and still holds records for absolute altitude, speed (Mach 3.3), and trans‑Atlantic flight time—such as New York to London in under 1h55min. The USAF retired the fleet in 1989, briefly reactivated them in the mid‑1990s, and NASA continued limited flights until final retirement in 1999.</p>
    </div>)
};

export function AircraftDetails({ infoType }: AircraftInfoTypeProps) {
    const renderContent = () => {
        switch (infoType) {
            case "info":
                return <InfoContent />;
            case "history":
                return <HistoryContent />;
            default:
                return <div>Unexpected content type.</div>;
        }
    }
    return (
        <div>{renderContent()}</div>
    );
}
