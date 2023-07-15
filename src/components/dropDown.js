import React from "react";

const DropDown = ({ name }) => {
  return (
    <div className="col mt-2">
  <label>{name}</label>
  <select className="form-control">
    <option value="Male"></option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>

  

</div>

  
  
//     <div>
//     <label htmlFor={name}>{name}</label>
//     <input
//       type={type}
//       className="form-control"
//       id={name}
//       placeholder={name}
//     />
//   </div>
  );
};

export default DropDown;
