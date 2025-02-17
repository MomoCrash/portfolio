import "../styles/footer.css"

export default function Footer() {
    return (
        <div className={"footer"}>
            <div className={"in-row"}>
                <p>© 2025 Ethan Gilotin. All Rights Reserved.</p>
                <div className={"footer-link"}>
                    <a href={"#"}> Home </a>
                    <a href={"contact"}> Contacts </a>
                    <a href={"credit"}> Credits </a>
                </div>
            </div>
        </div>
    )
}