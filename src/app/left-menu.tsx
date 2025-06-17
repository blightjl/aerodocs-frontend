import { Menu, Search } from "lucide-react";

export default function LeftMenu() {
    return (<nav>
        <ul>
            <li><Menu />Menu</li>
            <li><Search />Search</li>
            <li>Table of Contents</li>
            <li>Airbus</li>
            <li>Boeing</li>
            <li>Lockheed</li>
        </ul>
    </nav>);
}