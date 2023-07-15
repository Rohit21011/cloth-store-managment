import React from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import AddStock from "./components/addStock";
import Report from "./components/report";
import Bill from "./components/bill";
import StockDetails from "./components/stockDetails";
import SideNavBar from "./components/SideNavBar/SideNavBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
         
            <SideNavBar />
          

          <div className="col-9" style={{marginLeft:"20px"}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addStock" element={<AddStock />} />
              <Route path="/report" element={<Report />} />
              <Route path="/bill" element={<Bill />} />
              <Route path="/stockDetails" element={<StockDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
