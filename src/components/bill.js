
import React from "react";
import Button from "./button";

const Bill = () => {
  return (
    <div className="mt-5">
    <h1>Bill for Products</h1>
    <form className="mt-5">
    <div className="form-row d-flex">
    <div className="col-2 p-2">
    <select id="inputState" class="form-control">
         
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      </div>
      <div className="col-2 p-2">
        <input type="text" className="form-control" placeholder="Select Product" />
      </div>
      <div className="col-2 p-2">
        <input type="number" className="form-control" placeholder="Quantity" />
      </div>
      <div className="col-2 p-2">
        <input type="number" className="form-control" placeholder="Price" />
      </div>
      <div className="col-2 p-2">
      	<Button btnName="Add Product" color="var(--text)"/>
          </div>
    </div>
  </form>
  <table class="table table-sm table-striped table-responsive mt-5">
        <thead>
          <tr>
            <th scope="col">Sr no</th>
            
            <th scope="col">Product Name</th>
           
            <th scope="col">Quantity</th>
            <th scope="col">Price(per Product)</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>lycra</td>
            <td>5</td>
            <td>500</td>
            <td>2500</td>
           
            <td><div><Button btnName="Delete" color="red"/></div></td>
            
            
          </tr>
        </tbody>
      </table>
      <div className="d-flex mt-5">
      <div className="col-4 p-2">
        <input type="text" className="form-control" placeholder="Customer Name" />
      </div>
      <div className="col-4 p-2">
        <input type="text" className="form-control" placeholder="Customer Address" />
      </div>
      <div className="col-2 p-2">
      	<Button btnName="Generate Bill" color="var(--text)"/>
      </div>
      </div>
  </div>
  );
};
export default Bill;
