import Navbar from "../navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import './PageNotFound.css';

const PageNotFound = () => {
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