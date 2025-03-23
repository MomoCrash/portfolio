import {useEffect, useState} from 'react'
import "../styles/navbar.css"
import {getWindowDimensions, hasWindow} from "../main.jsx";
import {Link} from "react-router-dom";
import {IsHome} from "../App.jsx";

function Navbar() {

    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return (

        <nav className={"navbar"}>
            {windowDimensions.width < 1050 ? <Link to='/' className={"logo"}> Mon portfolio </Link> : ""}
            <ul className={isActive ? "navMenu active" : 'navMenu'}>
                <li onClick={removeActive}>
                    <a href={IsHome() ? "#" : "/"} className="navLink"> Mes liens <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span> </a>
                </li>
                <li onClick={removeActive}>
                    <a href={IsHome() ? "#projects" : "/"} className="navLink"> Mes projets <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span> </a>
                </li>
                <li onClick={removeActive}>
                    <a href={IsHome() ? "#contact" : "/"} className="navLink"> Me contacter <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span></a>
                </li>
            </ul>
            <div className={isActive ? "hamburger active" : 'hamburger'} onClick={toggleActiveClass}>
                <span className={"bar"}></span>
                <span className={"bar"}></span>
                <span className={"bar"}></span>
            </div>
        </nav>
    );
}
export default Navbar;
