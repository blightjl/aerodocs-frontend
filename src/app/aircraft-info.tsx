export interface AircraftInfoTypeProps {
    infoType: "info" | "history";
}

const InfoContent = () => {
    return (<div>
        <b>Origin:</b> United States<br />
        <b>Manufacturer:</b> Northrop Grumman Corporation<br />
        <b>First Flight:</b> July 17, 1989<br />
        <b>Service Entry:</b> January 1, 1997<br />
        <b>Height:</b> 17 ft (5.1 m)<br />
        <b>Wingspan:</b> 172 ft (52.4 m)<br />
        <b>Length:</b> 69 ft (20.9 m)<br />
        <b>Top Speed:</b> High subsonic (approx. Mach 0.85; ~630 mph; ~1,010 km/h)<br />
        <b>Service Ceiling:</b> 50,000 ft (15,240 m)<br />
        <b>Crew (Passengers):</b> 2
    </div>)
};

const HistoryContent = () => {
    return (<div>
        <p>The B-2 Spirit, a revolutionary heavy strategic bomber, was developed by Northrop Grumman as part of the Advanced Technology Bomber (ATB) program, designed to incorporate cutting-edge stealth technology to penetrate sophisticated air defenses. Its first public display was on November 22, 1988, and it made its maiden flight on July 17, 1989. The B-2 officially entered service on January 1, 1997. Its unique &quot;flying wing&quot; design, combined with composite materials and special coatings, makes it virtually invisible to most radar systems. Primarily designed for nuclear deterrence during the Cold War, its role shifted to conventional weapons delivery after the fall of the Soviet Union. The B-2 first saw combat in the Kosovo War in 1999, followed by operations in Afghanistan and Iraq. Capable of delivering massive payloads of conventional or nuclear munitions anywhere in the world with aerial refueling, the B-2 Spirit remains a critical asset for global power projection and strategic deterrence.</p>
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
