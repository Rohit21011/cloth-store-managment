
import React  from "react";
import Button from "./button";

const Report = () => {
    return (
        <div className="mt-5">
        <h1>Report</h1>
        
      <table class="table table-sm table-striped table-responsive mt-5">
            <thead>
              <tr>
                <th scope="col">Sr no</th>
                
                <th scope="col">Customer Id</th>
               
                <th scope="col">Customer Name</th>
                <th scope="col">Invoice Id</th>
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
                <td>5000</td>
                <td>11/12/2012</td>
               
                
                
                
              </tr>
            </tbody>
          </table>

      </div>

    )
}
export default Report;