import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing/Landing";
import Ledger from "./pages/ledger/ledger";
import Overview from "./pages/overview/overview";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Login from "./pages/login/login";
import App from "./app";
import Profile from "./pages/profile/profile";


const root = ReactDOM.createRoot(document.getElementById("root"));
// add a route to navigagte from and page to login
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/" element={<App/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
