import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./components/landing/Landing";
import Ledger from "./components/ledger/ledger";
import Overview from "./components/overview/overview";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Login from "./components/login/login";
import App from "./app";
import Profile from "./components/profile/profile";


const root = ReactDOM.createRoot(document.getElementById("root"));
// add a route to navigagte from and page to login
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
