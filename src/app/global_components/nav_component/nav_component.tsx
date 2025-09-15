import Image from "next/image"
import "./nav_component.tsx.css"

export default function Nav() {
    return (
        <nav className="navbar">

            <div className="logo-image">
            <Image
            src={'/images/PathFinderDigital_LogoMain.png'}
            width={300}
            height={100}
            alt="Main Pathfinder Logo"
            />
            </div>

            <div className="nav-menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </div>

            <div className="nav-menu-button">
                <div>-</div>
                <div>-</div>
                <div>-</div>
            </div>
        </nav>
    )
}