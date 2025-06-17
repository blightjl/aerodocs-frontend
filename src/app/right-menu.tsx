import { CircleUserRound, Heart, Settings } from "lucide-react";

export default function RightMenu() {
    return (
        <nav>
            <ul>
                <li><CircleUserRound />Profile</li>
                <li><Heart />Favorites</li>
                <li><Settings />Settings</li>
            </ul>
        </nav>
    );
}