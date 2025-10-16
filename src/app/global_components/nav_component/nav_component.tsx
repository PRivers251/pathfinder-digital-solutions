import Image from "next/image"
import "./nav_component.tsx.css"

export default function Nav() {
    return (
        <nav className="navbar">

            <div className="logo-image-container">
            <Image
            src={'/images/main_logo.png'}
            width={300}
            height={100}
            alt="Main Pathfinder Logo"
            id="logo-image"
            />
            </div>
            
            {/* <div className="nav-menu-button">
                <div><hr /></div>
                <div><hr /></div>
                <div><hr /></div>
            </div> */}

            {/* <div className="nav-menu">
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
            </div> */}

            
        </nav>
    )
}