import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleDollarToSlot, faBook, faMagnifyingGlassChart, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav className="navbar">
            <ul>
                <div className="navbar__logo">
                    <a href="/"><FontAwesomeIcon icon={faCircleDollarToSlot} className="faLogo-nav"/></a>
                </div>
                <div className="navbar__links">
                    <FontAwesomeIcon icon={faBars} onClick={() => {
                        setShowLinks(!showLinks)
                    }} className="faBars-nav"/>
                    {
                        showLinks && (
                            <div className="navbar__links__container">
                                <li className="navbar__links__container__link">
                                    <a href="/ledger"><span><FontAwesomeIcon icon={faBook} /></span> Ledger</a>
                                </li>
                                <li className="navbar__links__container__link">
                                    <a href="/overview" style={{fontSize: "0.9em"}}><span><FontAwesomeIcon icon={faMagnifyingGlassChart} /></span> Overview</a>
                                </li>
                                <li className="navbar__links__container__link">
                                    <a href="/transactions" style= {{fontSize: "0.75em"}}><span><FontAwesomeIcon icon={faBars} /></span> Transactions</a>
                                </li>
                            </div>
                        )
                    }
                </div>
                <div className="navbar__login">
                    <li className="navbar__login__link">
                        <a href="/login"><FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon></a>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;