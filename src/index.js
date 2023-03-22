import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./Landing";
import Ledger from "./components/ledger/ledger";
import Overview from "./components/overview/overview";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
