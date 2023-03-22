import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
            </div>
            <div className="navbar__links">
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;