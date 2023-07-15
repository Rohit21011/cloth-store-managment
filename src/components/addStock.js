import React, { useState } from "react";
import TextBox from "./textBox";
import DropDown from "./dropDown";
import Button from "./button";
import "../index.css";
const AddStock = () => {
    const [selectedValue, setSelectedValue] = useState('');

  
  return (
    <div className="mt-5 ">
    <h1 style={{marginLeft:"20px"}}>Enter Stock Details</h1>
    <form style={{marginTop:"45px"}}>
  <div className="form-row p-4 ">
  <div className="col mt-2 mb-4">

  <select value="Select Category" className="form-control">
  <option value="Select Category">Select Category</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
   
  </select>

  

</div>
<div className="col mt-2 mb-4">
  
  <select  className="form-control">
  <option value="Select Product Category">Select Product Category</option>
    <option value="Jeans">Jeans</option>
    <option value="Shirt">Shirt</option>
    <option value="T-Shirt">T-Shirt</option>
    
  </select>

  

</div>
   <TextBox name="Product Name" type="text"/>
   <TextBox name="Company Name" type="text"/>
   <TextBox name="Quantity" type="number"/>
   <TextBox name="Price" type="number"/>
   <Button btnName="Add Stock" color="var(--text)"/>
  </div>
</form>

  
    </div>

  );
};
export default AddStock;
