import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleDollarToSlot, faBook, faMagnifyingGlassChart, faCircleUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
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
                                    <a href="/loans"><span><FontAwesomeIcon icon={faMoneyBill} /></span> Loans</a>
                                </li>
                            </div>
                        )
                    }
                </div>
                <div className="navbar__login">
                    <li className="navbar__login__link">
                        <a href="/login/profile"><FontAwesomeIcon icon={faCircleUser} className="faCircleUser"/></a>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;