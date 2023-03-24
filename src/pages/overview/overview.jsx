import Navbar from "../../components/navbar/navbar";

const Overview = () => {
    if(!localStorage.getItem("loggedIn")) document.location.href = "/Login/overview";
    return (
        <div className="overview">
            <div className="overview__header">
                <Navbar/>
            </div>
        </div>
    )
}

export default Overview;