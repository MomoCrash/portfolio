import "../styles/footer.css"
import {IsHome} from "../App.jsx";

export default function Footer() {

    return (
        <div className={"footer"}>
            <div className={"in-row"}>
                <p>© 2025 Ethan Gilotin. All Rights Reserved.</p>
                <div className={"footer-link"}>
                    <a href={IsHome() ? "#" : "/"}> Home </a>
                    <a href={IsHome() ? "#contact" : "/"}> Contacts </a>
                    <a href={"credits"}> Credits </a>
                </div>
            </div>
        </div>
    )
}