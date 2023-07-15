import React from "react";

const Button = ({btnName,color}) => {
  return (
    <div>
      <button
        className="btn btn-primary
              btn-block border-0" style={{background:color}}
      >
        {btnName}
      </button>
    </div>
    
  );
};
export default Button;
