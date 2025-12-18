import {useEffect, useState} from 'react'
import "../styles/navbar.css"
import {getWindowDimensions, hasWindow} from "../main.jsx";
import {Link} from "react-router-dom";
import {IsHome} from "../App.jsx";

// read initial language from localStorage when available
const getInitialLang = () => {
    try {
        if (typeof window !== 'undefined') return localStorage.getItem('lang') || 'en';
    } catch (e) {
        return 'en';
    }
    return 'en';
}

function Navbar() {

    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [lang, setLang] = useState(getInitialLang());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    useEffect(() => {
        // update language when other parts of the app dispatch a change
        function onLangChanged(e) {
            const next = e?.detail || getInitialLang();
            setLang(next);
        }

        function onStorage(e) {
            if (!e) return;
            if (e.key === 'lang') {
                setLang(e.newValue || 'en');
            }
        }

        window.addEventListener('langChanged', onLangChanged);
        window.addEventListener('storage', onStorage);
        return () => {
            window.removeEventListener('langChanged', onLangChanged);
            window.removeEventListener('storage', onStorage);
        }
    }, []);

    return (

        <nav className={"navbar"}>
            {windowDimensions.width < 1050 ? <Link to='/' className={"logo"}> Mon portfolio </Link> : ""}
            <ul className={isActive ? "navMenu active" : 'navMenu'}>
                <li onClick={removeActive}>
                    <a href={IsHome() ? "#" : "/"} className="navLink">{'Hub'} <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span> </a>
                </li>
                <li onClick={removeActive}>
                    <a href={IsHome() ? "#projects" : "/"} className="navLink"> {lang === "en" ? "My projects" : "Mes projets" }  <span className={"pprogress-bar"}> <span
                        className={"pprogress-bar-percent"}></span> </span> </a>
                </li>
                {/*<li onClick={removeActive}>*/}
                {/*    <a href={"/games"} className="navLink">{lang === 'en' ? 'My games' : 'Mes jeux'} <span className={"pprogress-bar"}> <span*/}
                {/*        className={"pprogress-bar-percent"}></span> </span> </a>*/}
                {/*</li>*/}
                <li onClick={removeActive}>
                    <a href={IsHome() ? "#contact" : "/"} className="navLink"> {lang === 'en' ? 'Contact me' : 'Me contacter'} <span className={"pprogress-bar"}> <span
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
