import {useEffect, useState} from 'react'
import "../styles/navbar.css"
import {getWindowDimensions, hasWindow} from "../main.jsx";
import {Link} from "react-router-dom";

function Navbar() {
    // adding the states
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    //clean up function to remove the active class
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
            {windowDimensions.width < 1050 ? <Link to='/website-loiezhaut/' className={"logo"}> Mon portefolio </Link> : ""}
            <ul className={isActive ? "navMenu active" : 'navMenu'}>
                <li onClick={removeActive}>
                    <Link to="/" className="navLink"> Mon profile <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span> </Link>
                </li>
                <li onClick={removeActive}>
                    <Link to={{
                        pathname: "/",
                        hash: "#projects"
                    }}  className="navLink"> Mes projets <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span> </Link>
                </li>
                <li onClick={removeActive}>
                    <Link to="/contact" className="navLink"> Me contacter <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span></Link>
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
