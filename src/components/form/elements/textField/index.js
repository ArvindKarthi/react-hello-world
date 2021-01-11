import React from "react";

const TextField = ({ labelName, size }) => {
  return (
    <div>
      <label htmlFor={labelName} className={`d-block f-${size}`}>
        {labelName}
      </label>
      <input type="text" name={labelName} className={`d-${size}`} required />
    </div>
  );
};

export default TextField;
