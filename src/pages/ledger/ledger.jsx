import React from 'react';
import "./ledger.css";
import Navbar from "../../components/navbar/navbar";

const Ledger = () => {
    if(!localStorage.getItem("loggedIn")) document.location.href = "/Login/ledger";
    return (
        <div className="ledger">
            <Navbar/>
            
        </div>
    )
}

export default Ledger;