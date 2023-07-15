import React from "react";

const TextBox = ({type,name}) => {
  return (
    <div className="col mt-2 mb-4">
    <input type={type} className="form-control" placeholder={name} />
  </div>
  );
};
export default TextBox;
