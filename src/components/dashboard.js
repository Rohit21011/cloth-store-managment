import React, { useState } from "react";
import TextBox from "./textBox";
import DropDown from "./dropDown";
import Button from "./button";
import "../index.css";
const Dashboard = () => {
  
  return (
    <>
      <div className="mt-5">
      <div className="card text-white  mb-3" style={{ maxWidth: "18rem",background:"var(--primary)"}}>
 
  <div className="card-body " style={{color:"var(--text)"}}>
    <div className="text-center">
    <h1 className="card-title">Total Sell</h1>
    <h2 className="card-text">
      5000
    </h2>
    </div>
   
  </div>
</div>

        <h1>All Orders</h1>
        
      <table class="table table-sm table-striped table-responsive mt-5">
            <thead>
              <tr>
                <th scope="col">Sr no</th>
                <th scope="col">Customer Id</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Invoice Id</th>
                <th scope="col">Product</th>
                <th scope="col">Grand Total(Rs.)</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>12345</td>
                <td>Sujal</td>
                <td>54444</td>
                <td>Jeans</td>
                <td>5000</td>
                <td>11/12/2012</td>
              </tr>
            </tbody>
          </table>

      </div>

    </>

  );
};
export default Dashboard;
