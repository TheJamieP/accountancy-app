import Navbar from "../../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import './PageNotFound.css';

const PageNotFound = () => {
    if(!localStorage.getItem("loggedIn")) document.location.href = "/Login/404";
    return (
        <div>
            <Navbar/>
            <div className="pageNotFound">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <FontAwesomeIcon icon={faFaceFrown} className="faSadTear"/>
            </div>
        </div>
    )
}

export default PageNotFound;